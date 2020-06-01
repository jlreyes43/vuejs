<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
                id="user.firstName"
                :value="firstName"
                type="text" 
                class="form-control">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
                id="user.lastName"
                :value="lastName"
                type="text" 
                class="form-control">
        </div>
    </div> 
</template>
<script>

    console.log(this.value)

    export default {
        props: ['value'],
        data(){
            return {
                firstName: 'JL',
                lastName: 'Reyes'
            }
        },
        methods:{

        }
        // computed:{
        //     firstName(){
        //         return this.value.split(" ")[0];
        //     },
        //     lastName(){
        //         return this.value.split(" ")[1];
        //     }
        // }
    }
</script>