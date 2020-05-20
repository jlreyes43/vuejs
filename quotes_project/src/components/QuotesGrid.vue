<template>
    <div class="row">
        <jl-quotes v-for="quote in quotes">{{ quote }}</jl-quotes>
    </div>
</template>

<script>

    import Quotes from './Quotes.vue'

    export default {
        props:['quotes'],
        components:{
            jlQuotes: Quotes
        }
    }
</script>

<style scoped>

</style>