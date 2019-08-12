<template>
   <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2>Appointments</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
        <input class="searchbox" type="text" placeholder="Search..">

 <!-- how you get the userimage {{ this.applications[0].Idurl[0] }} !-->
      {{ this.appointments[0] }}

    </div>
    
        </div>
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
import {getAppointments} from "@/../actions"
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
        appointments:null,
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

    getAllAppointments(){

        this.appointments = getAppointments();
       // console.log(this.users);
        if(this.applications!=null){
            this.showNotification('success', 'appointments have been downloaded')
        }

    },
    ApproveAppointments(){

    },

        SearchForAppointment(search_criteria){

    },
    FilterFunction(filter_criteria){

    },

  },
   beforeMount(){
    this.getAllAppointments()
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
