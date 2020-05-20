<template>
    <div class="container">
        <jl-new-quotes @quoteAdded="newQuote"></jl-new-quotes>
        <jl-quotes-grid :quotes="quotes"></jl-quotes-grid>
    </div>
</template>

<script>

    import QuotesGrid from './components/QuotesGrid.vue'
    import NewQuotes from './components/NewQuotes.vue'

    export default {
        data: function(){
            return{
                quotes: [
                    'An eye for an eye makes the whole world blind'
                ],
                maxQuotes: 10
            }
        },
        components:{
            jlQuotesGrid: QuotesGrid,
            jlNewQuotes: NewQuotes
        },
        methods:{
            newQuote(quote){
                this.quotes.push(quote);
            }
        }
    }
</script>

<style>
</style>
