<template>
    <div class="container">
        <jl-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></jl-header>
        <jl-new-quotes 
            @quoteAdded="newQuote"
        ></jl-new-quotes>
        <jl-quotes-grid 
            :quotes="quotes"
            @quoteDeleted="deleteQuote"
        ></jl-quotes-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>

    import QuotesGrid from './components/QuotesGrid.vue'
    import NewQuotes from './components/NewQuotes.vue'
    import Header from './components/Header.vue'

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
            jlNewQuotes: NewQuotes,
            jlHeader: Header
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please delete quotes first!');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
