<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input type="text" v-model="text1">
                <p>{{ text1 | reverse}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <input type="text" v-model="text2">
                <p>{{ text2 | count}}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input type="text" v-model="text3">
                <p>{{ reversed }}</p>

                <input type="text" v-model="text4">
                <p>{{ counted }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>

    import { mixins } from './mixins'

    export default {
        data(){
            return{
                text1: '',
                text2: '',
                // text3: '',
                // text4: ''
            }
        },
        filters: {
            reverse(value){
                let valueArray = value.split('');
                valueArray.reverse();
                return valueArray.join("");
            },
            // count(value){
            //     //let valueArray = value.split('');
            //     //let arrayLength = valueArray.length();
            //     return `${value} (${value.length})`;
            // }
        },
        mixins: [mixins]
        // computed:{
        //     reversed(){
        //         let valueArray = this.text3.split('');
        //         valueArray.reverse();
        //         return valueArray.join("");
        //     },
        //     counted(){
        //         //let valueArray = value.split('');
        //         //let arrayLength = valueArray.length();
        //         return `${this.text4} (${this.text4.length})`;
        //     }
        // }
    }
</script>

<style>
</style>
