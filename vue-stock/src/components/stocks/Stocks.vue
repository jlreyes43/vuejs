<template>
    <div class="row">
        <app-stock v-for="stock in stocks"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data(){
            return{
                stocks: [
                    { id: 1, name: 'Volkswagen', price: 50 },
                    { id: 2, name: 'Google', price: 20 },
                    { id: 3, name: 'Udemy', price: 40 },
                    { id: 4, name: 'Twitter', price: 10 },
                ]
            }
        },
        components:{
            appStock: Stock
        }
    }
</script>