<template>
    <div class="col-sm-3 col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{ stock. name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="quantity"
                        v-model="quantity">
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
                        >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                if(order.stockPrice > this.funds){
                    this.quantity = 0;
                    return alert('You don\'t have enough funds for that!');
                }
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>