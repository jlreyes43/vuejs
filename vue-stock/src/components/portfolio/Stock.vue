<template>
    <div class="col-sm-10 col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{ stock. name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
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
                        @click="sellStock(stock.quantity)"
                        :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
                        >Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(stockQuantity){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                if(stockQuantity < order.quantity){
                    return alert('You don\'t have enough stocks for that!');
                }
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>