<template>
   <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2>APPLICATIONS</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
        <input class="searchbox" type="text" placeholder="Search..">

 <!-- how you get the userimage {{ this.applications[0].Idurl[0] }} !-->
      {{ this.applications[0] }}
       <div class="columns">
         <div class="column" style="margin:50px">
           <h3>Name: {{this.applications[0].applicationinfo.name}}</h3>
           <h3>DOB: {{this.applications[0].applicationinfo.dob}}</h3>
           <h3>SSN:{{this.applications[0].applicationinfo.ssn}}</h3>
           <h3>Team Size:{{this.applications[0].applicationinfo.num_team}}</h3>

         </div>
         <div class="column">
           <h1 style="margin:10px">Front of Id</h1>
        <img class="idbox"  :src="this.applications[1].Idurl[1]" />
        </div>
         <div class="column">
           <h1 style="margin:10px" >Back of Id</h1>
         <img class="idbox" :src="this.applications[1].Idurl[0]" />
         </div>
         </div>
    </div>
    
        </div>
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
import {getApplications,downloadApplicationImages} from "@/../actions"
import notifier from "@/admin/mixins/notifier";
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
        applications:null,
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
  methods: {

    getApplications(){

        this.applications = getApplications();
       // console.log(this.users);
        if(this.applications!=null){
            this.showNotification('success', 'applications have been downloaded')
        }

    },
    ApproveApplication(){

    },

  },
   beforeMount(){
    this.getApplications()
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

.idbox{
  width:250px;
  height:250px;

}

.searchbox {
    width:40%;
    font-weight: bold;
    border-radius: 5px
}
</style>
