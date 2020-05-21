<template>
    <div class="row">
        <jl-quotes 
            v-for="(quote, index) in quotes"
            @click.native="deleteQuote(index)"
        >{{ quote }}</jl-quotes>
    </div>
</template>

<script>

    import Quotes from './Quotes.vue'

    export default {
        props:['quotes'],
        components:{
            jlQuotes: Quotes
        },
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style scoped>

</style>