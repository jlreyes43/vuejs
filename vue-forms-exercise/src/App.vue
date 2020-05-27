<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-if="!isSubmitted">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <br>
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input 
                            id="user.name"
                            v-model="user.name"  
                            type="text" 
                            class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input 
                            id="user.mail" 
                            v-model="user.mail" 
                            type="text" 
                            class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            id="user.password" 
                            v-model="user.password" 
                            type="password" 
                            class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="isStored">
                            <input 
                                id="isStored" 
                                v-model="isStored" 
                                value="isStored" 
                                type="checkbox"> Store in database?
                        </label>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary"
                                    @click.prevent="submitted">Submit!
                            </button>
                        </div>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" v-if="isSubmitted">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.name }}</p>
                        <p>Mail:  {{ user.mail }}</p>
                        <p>Password:  {{ user.password }} </p>
                        <p>Store in Database?:  {{ isStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:{
                    name: '',
                    mail: '',
                    password: ''
                },
                isStored: false,
                isSubmitted: false
            }
        },
        methods:{
            submitted(){
                this.isSubmitted = true
            }
        }
    }
</script>

<style>
</style>
