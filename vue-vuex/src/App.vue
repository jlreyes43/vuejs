<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- when using :value @input -->
                <!-- <input type="text" :value="value" @input="updateValue"> -->
                <!-- when using v-model -->
                <input type="text" v-model="value">
                <p>{{value}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        //when using :value @input
        // computed: {
        //     value(){
        //         return this.$store.getters.value
        //     }
        // },
        // methods:{
        //     updateValue(event){
        //         this.$store.dispatch('updateValue', event.target.value);
        //     }
        // },
        //when using v-model
        computed:{
            value:{
                get(){
                    return this.$store.getters.value;
                },
                set(value){
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherCounter: AnotherCounter,
            appAnotherResult: AnotherResult
        }
    }
</script>

