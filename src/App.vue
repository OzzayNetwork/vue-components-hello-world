<template>

  <div class="loader" v-if="isLoading">
    Loading wait please ...
  </div>

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
  <Parent/>
  <hr>
  <h1>TemplateRef</h1>
  <TemplateRef/>
  <hr/>

  <h1>Composition APi</h1>
  <p>The composition API is a feature in vue 3 which gives us another way to write our components more specificaly the script block</p>
  <Data />
  <hr>

  <h1>reactivity and toRefs</h1>
  <demoOne/>
  <hr/>
  <demo-two-vue/>

  <hr>
  <h1>Using composition APIs with Methods</h1>
  <MethodsVue/>

  <hr/>

  <h1>Composition API with v Model</h1>
  <VmodelVue/>
  <hr>

  <h1>Computed composition API</h1>
  <ComputedCompositionapiVue/>
  <hr>

  <h1>Watch composition API</h1>
  <WatchCompositionApiVue/>
  <hr>

  <h1>Replacing Provide/Inject</h1>
  <ProvideInjectCompositionVue/>

  <hr>
  <h1>Routing the Vie Project</h1>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'About'}">About</router-link>
    <router-link :to="{name:'Jobs'}">Jobs</router-link>

    <a href="/about">About Link</a>

    <br>
    <br>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go Forward</button>

    


  </div>
  <router-view/>




  

</template>

<script>
import router from './router'
import { createApp } from 'vue'
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
import Parent from './components/Parent.vue'
import TemplateRef from './components/TemplateRef.vue';
import Data from './components/Data.vue'
import DemoOne from './components/DemoOne'
import DemoTwoVue from './components/DemoTwo.vue';
import MethodsVue from './components/Methods.vue';
import VmodelVue from './components/Vmodel.vue';
import ComputedCompositionapiVue from './components/ComputedCompositionapi.vue';
import WatchCompositionApiVue from './components/Watch.Composition.Api.vue';
import ProvideInjectCompositionVue from './components/ProvideInject.composition.vue';







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
    CreatePost,
    Parent,
    TemplateRef,
    Data,
    DemoOne,
    DemoTwoVue,
    MethodsVue,
    VmodelVue,
    ComputedCompositionapiVue,
    WatchCompositionApiVue,
    ProvideInjectCompositionVue
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
      activeTab:'TabA',
      isLoading: true
    }
  },
  methods:{
    closePopup(name){
      this.showPopup=false
      console.log('name',name)
    },

    redirect(){
      this.$router.push({name:'Home'})
    },
    back(){
      // this.$router.go(steps)
      this.$router.go(-1)
    },
    forward(){this.$router.go(1)}
  },
  mounted() {
    // Simulate loading completion, you can adjust this to fit real conditions
    this.isLoading = false
    console.log("App has been mounted again")
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

.loader{
  position: fixed;
  height: 100vh;
  width: 100%;
  background: black;
  color: white;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
a{
  margin: 5px;
}

</style>
