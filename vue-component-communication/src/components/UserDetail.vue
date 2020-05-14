<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>

    </div>
</template>

<script>

    import { eventBus } from '../main';

    export default{
        props: {
            myName: {
                type: String,
                default: 'JL'
            },
            //callback function method (child <-> parent communication)
            resetFn: Function,
            userAge: Number
        },
        methods:{
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                //emit function method to pass data from child to parent (child <-> parent communication)
                this.myName = 'JL';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
