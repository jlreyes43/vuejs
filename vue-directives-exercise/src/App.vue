<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-jlOn:click="gotClicked" class="btn btn-primary">Click me</button>
                <hr>
                <div 
                    style="width: 100px; height: 100px; background-color: lightgreen"
                    v-jlOn:mouseenter="mouseEnter"
                    v-jlOn:mouseleave="mouseLeaved">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            jlOn: {
                bind(el, binding){
                    // el.onclick = function(){
                    //     binding.value();
                    // }

                    const type = binding.arg;
                    const func = binding.value;

                    el.addEventListener(type, func);
                }
            }
        },
        methods:{
            gotClicked(){
                alert('you clicked it');
            },
            mouseEnter(){
                console.log('Mouse entered!');
            },
            mouseLeaved(){
                console.log('Mouse left!')
            }
        }
    }
</script>

<style>
</style>
