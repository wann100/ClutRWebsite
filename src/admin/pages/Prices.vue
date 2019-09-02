<template>
  <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2>Prices</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
        <select v-model="filteredProperty">
      <option value="firstname">First Name</option>
       <option value="lastname">Last Name</option>
       <option value="email">Email</option>
      <option value="uid">uid</option>
     
    </select>
    <input placeholder="filter value" v-model="query">    
    <button @click="addFilter">add filter</button>
      <hr>
  <table v-if="activeFilters.length">
    <tr style="width: 100px">
      <th colspan="3">Filters in use:</th>
    </tr>
    <tr v-for="(filter, index) in activeFilters" :key="index">
      <td>{{ filter.name }}:</td>
      <td>{{ filter.value }}</td>
      <td style="padding-left: 10px;">
        <a href="#" @click.prevented=removeFilter(index)>
          remove
        </a>
      </td>
    </tr>
  </table>
  <hr v-if="activeFilters.length">
  

  
        </div>
        </div>
<a class="img-container" v-for="(item, key) in users" :key="key"   >
<!--  This is how you create a collapsible list using the key and array !-->
  <div class="columns">
         <b-button    v-b-toggle="'collapse-'+key"  variant="primary">View: {{item.userDetails.firstname+item.userDetails.lastname}}</b-button>       
   </div>
   <b-collapse    :id="'collapse-'+key"  >
    <b-card>
 <div class="columns">
    <h4 style="margin-top:4%">Userinfo</h4>
     
        <div class="column">
          <h6>First Name</h6>
         
          <quick-edit @input="updateUser(item.userDetails,'firstname',item.userDetails.firstname)" v-model="item.userDetails.firstname"></quick-edit>
          
     </div>
    <div class="column">
  <h6>Last Name</h6>
   <quick-edit  @input="updateUser(item.userDetails,'lastname',item.userDetails.lastname)" v-model="item.userDetails.lastname"></quick-edit>
   </div>
      <div class="column">
  <h6>Phone </h6>
 <quick-edit @input="updateUser(item.userDetails,'phone',item.userDetails.phone)"   v-model="item.userDetails.phone"></quick-edit>
   </div>
       <div class="column">
  <h6>Email </h6>
 <h6>{{item.userDetails.email}}</h6>
   </div>
         <div class="column">
  <h6>rating </h6>
 <h6>{{item.userDetails.rating}}/5</h6>
   </div>
   <div class="column">
     <h6>is a cleaner </h6>
 <quick-edit @input="updateUser(item.userDetails,'isCleaner',item.userDetails.isCleaner)"     type="dropdown" v-model="item.userDetails.isCleaner"></quick-edit>
   </div>
    <div class="column">
     <h6>points </h6>
  <quick-edit @input="updateUser(item.userDetails,'points',item.userDetails.points)"   v-model="item.userDetails.points"></quick-edit>
   </div>
    
     </div>
      </b-card></b-collapse> </a>


     </div>
    
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
import {updateUserDetails,userDetailsFetch} from "@/../actions"
import notifier from "@/admin/mixins/notifier";
import QuickEdit from 'vue-quick-edit';
import {
  settingsRef,
  mediaRef,
  navRef,
  contentsRef,
  fieldsRef,
  routesRef,
  usersRef
} from "@/admin/firebase_config";
import _ from "lodash";

export default {
  data() {
    return { 
        users:null,
        currentUser: firebase.auth().currentUser,
        filteredProperty: 'email',
        query:'',
        activeFilters: [],


     };
  },
  firebase: {
    settings: settingsRef,
    media: mediaRef,
    nav: navRef,
    fields: fieldsRef,
    contents: contentsRef,
    routes: routesRef
  },
  mixins: [notifier],
   computed: {
    
  },
  components: { QuickEdit },
  methods: {
filtered () {
      var filtered =this.users;
      this.activeFilters.forEach(filter => {
        
        filtered = filtered.filter(record => {
          console.log(record["userDetails"][filter.name]);
          return filter.name === 'name'
            ? new RegExp(filter.value, 'i').test(record["userDetails"][filter.name])
            : record["userDetails"][filter.name] == filter.value; 
            console.log(filter.value);
             //onsole.log(record);
        })
        
      })
     // console.log(filtered);
      console.log(filtered);
      return this.users = filtered
    },
    getusers(){

        this.users = userDetailsFetch();
       // console.log(this.users);
        if(this.users!=null){
            this.showNotification('success', 'Users Dowloaded')
        }


    },
    updateUser(currentUser,whichdetails,details){
      //console.log("i got challed");
      updateUserDetails(currentUser,whichdetails,details);
      this.getusers()

    },
     addFilter () {
      this.activeFilters.push({
        name: this.filteredProperty,
        value: this.query
      })
      this.filtered();
      this.query = ''
    },
    removeFilter (idx) {
      this.activeFilters.splice(idx, 1)
      this.getusers();
    },


  },
   beforeMount(){
    this.getusers()
 },
};
</script>

<style lang="scss" scoped>
.column > div {
  margin-top: 15px;
  &:first-child {
    margin-top: 0px;
  }
}

button {
  vertical-align: middle !important;
  margin-left: 30px;
}

.searchbox {
    width:40%;
    font-weight: bold;
    border-radius: 5px
}
input{
  width:80%,

}
.columns{
    margin-top:40px;

}
</style>
