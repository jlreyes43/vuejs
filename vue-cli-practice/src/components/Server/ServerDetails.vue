<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default{
        data: function(){
            return{
                server: null
            }
        },
        methods: {
            resetStatus(){
                if(this.server.status == "Normal"){
                    this.server.status = "Critical"
                }else{
                    this.server.status = "Normal";
                }
                this.$emit('serverWasReset', this.server.status);
            }

            // CHILD TO PARENT COMMUNICATION (STEP 1. Cont. in App.vue)
            //Use $emit with the first argument as the event name and the
            //the second argument as the data that you want to pass
        },
        created(){
            serverBus.$on('serverWasSelected', (server) => {
                this.server = server
            });
        }
        //CHILD TO CHILD COMMUNICATION 
        //PART 3
        //Continued from Server.vue
        //put this listener in the created cycle so that it begins to listen 
        //to the event bus upon the start of the app
        //the first parameter is what it will be listening to, 
        //the second parameter is the data it will receive
    }
</script>
