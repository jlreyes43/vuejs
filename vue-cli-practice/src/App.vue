<template>
    <div class="container">
        <!-- Header component -->
        <jl-header></jl-header>
        <hr>
        <div class="row">
            <!-- ServerList component -->
            <jl-server-list></jl-server-list>
            <!-- ServerDetails component -->
            <jl-server-details></jl-server-details>
        </div>
        <hr>
        <div class="row">
            <!-- ServerManage component -->
            <jl-footer></jl-footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue'
    import ServerList from './components/Server/ServerList.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'
    import Footer from './components/Shared/Footer.vue'

    export default{
        components: {
            'jl-header': Header,
            'jl-server-list': ServerList,
            'jl-server-details': ServerDetails,
            'jl-footer': Footer
        }
    }
</script>

<style>

</style>
