<template>   
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script>

    import { serverBus } from '../../main';

    export default{

        props: ['server'],
        // PARENT TO CHILD COMMUNICATION. PART 2 - Cont. from Servers.vue
        //Receives :server from jl-server component. 
        //Can then be used as normal "data"

        methods:{
            serverSelected(){
                serverBus.serverSelected(this.server);
            }
            //CHILD TO CHILD COMMUNICATION 
            //PART 2 
            //Continued from main.js
            //Continued in ServerDetails.vue
            //Define the method locally so that it can be used by, for example, click listenrers
            //like above
            //Upon click, the data is sent to the event bus
            //You can now listen for this event in the component that will receive the data
        },
    }
</script>
