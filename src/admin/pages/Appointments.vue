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
    <div class="box" >
      <div class="columns">
        <div class="column">
        <input class="searchbox" type="text" placeholder="Search..">
 <!-- how you get the userimage {{ this.applications[0].Idurl[0] }} !-->
    
    </div>
        </div>
    <a class="img-container" v-for="(item, key) in appointments" :key="key"   >
<!--  This is how you create a collapsible list using the key and array !-->
         <b-button    v-b-toggle="'collapse-'+key"  variant="primary">View: {{item.id}}</b-button>       
   <b-collapse    :id="'collapse-'+key"  >
    <b-card>
        <div class="columns">
            <h4 style="text-align:center">Appointment info</h4>
               <div class="column">
                <h6>customer id:</h6>
                <h7>{{item.customerId}}</h7>
            </div>
               <div class="column">
                <h6>Cleaner id:</h6>
                <h7>{{item.cleaner_Id_1}}</h7>
            </div>
            <div class="column">
                <h6>Status:</h6>
                <quick-edit v-model="item.status"></quick-edit>
            </div>
            <div class="column">
                <h6>checklist submit:</h6>
                <quick-edit type="boolean" v-model="item.checklistsubmitted"></quick-edit>
            </div>
               
                    <div class="column">
                <h6>Service:</h6>
                <quick-edit v-model="item.servicename"></quick-edit>
            </div>
            <div class="column">
                <h6>Date of Request:</h6>
                <quick-edit v-model="item.dateofAppointmentRequest"></quick-edit>
            </div>

                 <div class="column">
                <h6>Time of Request:</h6>
                <quick-edit v-model="item.timeofappointmentRequest"></quick-edit>
            </div>
                <div class="column">
                <h6>Rating:</h6>
                <quick-edit v-model="item.rating"></quick-edit>
            </div>
              <div class="column">
                <h6>Price:</h6>
                <quick-edit v-model="item.price"></quick-edit>
            </div>
             <div class="column">
                <h6>customer phone:</h6>
                <quick-edit v-model="item.customerPhone"></quick-edit>
            </div>
           
        </div>
 <div class="columns">
      <h4 style="text-align:center">Property info</h4>
          <div class="column">
                <h6>Address:</h6>
                <quick-edit v-model="item.property_address"></quick-edit>
            </div>
             <div class="column">
                <h6>Type of Property:</h6>
                <quick-edit v-model="item.typeof"></quick-edit>
            </div>
                  <div class="column">
                <h6>lockbox code:</h6>
                <quick-edit v-model="item.lockboxcode"></quick-edit>
            </div>
              <div class="column">
                <h6>Number of bathrooms:</h6>
                <quick-edit v-model="item.numberofbathrooms"></quick-edit>
            </div>
            <div class="column">
                <h6>Number of bedrooms:</h6>
                <quick-edit v-model="item.numberofbedrooms"></quick-edit>
            </div>
            </div>
             </b-card></b-collapse> </a>
         {{appointments[0]}}
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
import {getAppointments,getUser} from "@/../actions"
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

    getAllAppointments(filter){

        this.appointments = getAppointments(filter);
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
    getuser(userid){

        return getUser(userid);
    }

  },
   beforeMount(){
    this.getAllAppointments("approved")
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
.box{
    width:120%;
    margin-left:-10%;
}
.column{
    text-align:center;
    
}
h7{
    font-size: 3mm;
    text-align: justify;
}
</style>
