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
  <h2>Vue JS 3 Tutorial - 39 - Slots Props</h2>
  <NameList/>
  <hr/>

  <h4>App component tetx</h4>


    <childStyles/>
  <hr>
  <h1>Dynamic Components</h1>
  <button @click="activeTab='TabA'">Tab A</button>
  <button @click="activeTab='TabB'">Tab B</button>
  <button @click="activeTab='TabC'">Tab C</button>
  <!-- <TabA v-if="activeTab==='TabA'"/>
  <TabB v-if="activeTab==='TabB'"/>
  <TabC v-if="activeTab==='TabC'"/> -->

  <!-- keeps items alive eben though the component is still not active -->

  <keep-alive>
    <component :is="activeTab"/>
  </keep-alive>
  <i>This is a summarry of what is up above us</i>
  <hr>
  <h1>Telaport Component</h1>
  <teleport to='#portal-root'>
    <portal/>
  </teleport>
  <hr>
  <h1>Vue and HttP</h1>
  <hr>

  <h1>Tutorial 45 HTTP GET Request</h1>
  <postList/>
  <hr>

  <h1>HTTP POST Request</h1>
  <createPost/>
  <hr>

  <h1>Component Lifecycle Hooks</h1>
  <p>Creation (component is about to be created. beforeCreate() all data Properties, computed propertiese and methids are not processed by the component ready to be used in created() method) - Mounting (HTML is mounted to the DOm.. beforeMount() and mounted() use before or after the component is initially rendered mounted is common) - Updating(triggered when a reactive property is invoked eg data or reerendering boforeUpdate() and updated() ) - Unmounting (when about to be removed)</p>
  <p>Misc Methods (activated(), deactivated(), errorCaptured(), renderTracked(), renderTriggered())</p>
  <hr>
  

</template>

<script>
import Article from './components/Article.vue';
import GreetComponent from './components/Great.vue';
import ComponentC from  './components/ComponentC.vue'
import PopupComponent from  './components/Popup.vue'
import InputComponet from './components/Input.vue'
import CardComponent from './components/Card.vue'
import NameList from './components/NameList'
import ChildStyles from './components/ChildStyles.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import Portal from './components/Portal.vue'
import PostList from './components/PostList.vue'
import CreatePost from './components/CreatePost.vue'


export default {
  name: 'App',
  components:{
    GreetComponent,
    Article,
    ComponentC,
    PopupComponent,
    InputComponet,
    CardComponent,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,
    PostList,
    CreatePost
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
      newName:'',
      activeTab:'TabA'
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
