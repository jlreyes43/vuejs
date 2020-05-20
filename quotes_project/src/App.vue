<template>
    <div class="container">
        <jl-quotes-grid :quotes="quotes"></jl-quotes-grid>
    </div>
</template>

<script>

    import QuotesGrid from './components/QuotesGrid.vue'

    export default {
        data: function(){
            return{
                quotes: ['An eye for an eye makes the whole world blind'],
                maxQuotes: 10
            }
        },
        components:{
            jlQuotesGrid: QuotesGrid
        }
    }
</script>

<style>
</style>
