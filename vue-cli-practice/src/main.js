import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
  methods:{
    serverSelected(server){
      this.$emit('serverWasSelected', server)
    }
  }
});

//CHILD TO CHILD COMMUNICATION 
//PART 1
//Make the event bus. In this case serverBus
//Continued in Server.vue

//Sidenote: this can also act as a place to put all global methods across the app.
//Putting methods in the vue instance will allow all components to access the necessary
//functions

new Vue({
  el: '#app',
  render: h => h(App)
})
