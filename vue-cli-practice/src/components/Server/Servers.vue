<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <jl-server 
                v-for="server in servers"
                :server="server">
            </jl-server>
            <!-- this part was kind of confusing at first. 
            Take note that the v-for loop creates a variable implicitly 
            that you can then pass like any normal data -->

            <!-- PARENT TO CHILD COMMUNICATION PART 1 - Cont. in Server.vue
            :server="server" 
            to send data to the component containing this attribute, 
            jl-server in this case -->
        </ul>
    </div>
</template>

<script>

    import Server from './Server.vue';
    
    export default{
        data: function(){
            return{
                servers:[
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ]
            };
        },
        components: {
            'jl-server': Server
        }
    }

</script>