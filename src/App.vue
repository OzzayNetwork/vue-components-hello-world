<template>

  <!-- adding props -->
  <GreetComponent name="Bruce" heroName="Batman" />
  <GreetComponent name="Clark" heroName="Superman"/>
  <GreetComponent :name="name" :heroName="channel"/>

  <!-- include v bind directives for none string variables -->
  <Article title="Article Title" :likes="50" :isPublished="true"/>

</template>

<script>
import Article from './components/Article.vue';
import GreetComponent from './components/Great.vue';


export default {
  name: 'App',
  components:{
    GreetComponent,
    Article
  },

  data(){
    return{
      name:"kelvin",
      channel:'Brighter Monday'
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
