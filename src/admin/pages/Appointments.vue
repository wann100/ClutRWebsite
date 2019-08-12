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
        <img :src="this.applications[1].Idurl[1]" />
         <img :src="this.applications[1].Idurl[0]"  style="width:40px,height:50px"/>
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

.searchbox {
    width:40%;
    font-weight: bold;
    border-radius: 5px
}
</style>
