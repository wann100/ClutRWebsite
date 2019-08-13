<template>
  <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2>Users</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
        <input class="searchbox" type="text" placeholder="Search..">
        </div>
        </div>
<a class="img-container" v-for="(item, key) in users" :key="key"   >
<!--  This is how you create a collapsible list using the key and array !-->
         <b-button    v-b-toggle="'collapse-'+key"  variant="primary">View: {{item.userDetails.firstname+item.userDetails.lastname}}</b-button>       
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
 <quick-edit @input="updateUser(item.userDetails,'isCleaner',item.userDetails.isCleaner)"     type="boolean" v-model="item.userDetails.isCleaner"></quick-edit>
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
  components: { QuickEdit },
  methods: {

    getusers(){

        this.users = userDetailsFetch();
       // console.log(this.users);
        if(this.users!=null){
            this.showNotification('success', 'Users Dowloaded')
        }


    },
    updateUser(currentUser,whichdetails,details){
      console.log("i got challed");
      updateUserDetails(currentUser,whichdetails,details);
      this.getusers()

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
