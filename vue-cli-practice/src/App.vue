<template>
    <div class="container">
        <jl-header></jl-header>
        <hr>
        <div class="row">
            <servers></servers>
            <jl-server-details @serverWasReset="serverStatus = $event"></jl-server-details>
            <!-- CHILD TO PARENT COMMUNICATION (Step 2. Cont. from ServerDetails.vue)
            the first argument of the emit then becomes the event we want to listen to 
            $event is the data we passed in the second argument. You can now pass it
            as "data" and use inside the parent component.
            
            Though this will only work when the resetStatus() is clicked because
            that is where I hooked the emit method in-->
        </div>
        <p>The server is {{ serverStatus }}</p>
        <hr>
        <jl-footer></jl-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function(){
            return{
                serverStatus: null
            }
        },
        components: {
            'jl-header': Header,
            Servers,
            'jl-server-details': ServerDetails,
            'jl-footer': Footer
        }
    }
</script>