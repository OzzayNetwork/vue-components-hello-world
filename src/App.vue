<template>

  <!-- adding props -->
  <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman"/>
  <GreetComponent :name="name" :heroName="channel"/>

  <!-- include v bind directives for none string variables -->
  <Article id="my-article" title="Kelvin Wins" :likes="50" :isPublished="true"/>

  <hr>
  <h2>Provide and injecting components</h2>
  <h3>App Component username is {{ myName }}</h3>
  <ComponentC/>
  <hr>

  <h2>Custom Events</h2>
  <hr/>

</template>

<script>
import Article from './components/Article.vue';
import GreetComponent from './components/Great.vue';
import ComponentC from  './components/ComponentC.vue'


export default {
  name: 'App',
  components:{
    GreetComponent,
    Article,
    ComponentC
  },

  //this enables us to share data across several leveles of components
  provide(){
    return{
      userName:this.myName
    }
    
  },

  data(){
    return{
      name:"kelvin",
      channel:'Brighter Monday',
      myName:'Kelvin'
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
