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
  <button @click="showPopup=true">Show Pop Up</button>
  <PopupComponent v-show="showPopup" @close="closePopup" />
  <hr/>
    <h2>Components and v-model in Vue.js 3</h2>
    <input type="text" v-model="newName">

    <InputComponet/>

    
  <hr>

  <h2>SLots have been started</h2>
  <cardComponent>
    <p>Card Content</p>
  </cardComponent>
  <cardComponent>
   <h3>Default content 2</h3>
  </cardComponent>

  <cardComponent>
  </cardComponent>

  <cardComponent>
    <template v-slot:header>
      <h3>Header</h3>
    </template>

    <template v-slot:default>
      <h3>The Content</h3>
    </template>
    <template v-slot:footer>
      <button>View More</button>
    </template>
  </cardComponent>
  <hr>

</template>

<script>
import Article from './components/Article.vue';
import GreetComponent from './components/Great.vue';
import ComponentC from  './components/ComponentC.vue'
import PopupComponent from  './components/Popup.vue'
import InputComponet from './components/Input.vue'
import CardComponent from './components/Card.vue'


export default {
  name: 'App',
  components:{
    GreetComponent,
    Article,
    ComponentC,
    PopupComponent,
    InputComponet,
    CardComponent
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
      myName:'Kelvin',
      showPopup:false,
      newName:''
    }
  },
  methods:{
    closePopup(name){
      this.showPopup=false
      console.log('name',name)
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
