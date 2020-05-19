<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <button @click="selectedComponent= 'jlQuote'">Quote</button>
                <button @click="selectedComponent= 'jlAuthor'">Author</button>
                <button @click="selectedComponent= 'jlNew'">New</button>
               <hr>
               <p>{{ selectedComponent }}</p>
               <!-- <jl-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p>A Wonderful Quote</p>
               </jl-quote> -->
               <component :is="selectedComponent">
                   <p>Default Content</p>
               </component>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function(){
            return{
                quoteTitle: 'The Quote',
                selectedComponent: 'jlQuote'
            }
        },
        components: {
            jlQuote: Quote,
            jlAuthor: Author,
            jlNew: New
        }
    }
</script>

