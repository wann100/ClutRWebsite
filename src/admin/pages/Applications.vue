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
 <div>
 
</div>
 <a class="img-container" v-for="(item, key) in this.applications" :key="key"   >
<!--  This is how you create a collapsible list using the key and array !-->
         <b-button    v-b-toggle="'collapse-'+key"  variant="primary">View/Approve: {{item.applicationinfo.name}}</b-button>       
   <b-collapse    :id="'collapse-'+key"  >
    <b-card>
       <div class="columns"  >
         <div class="column" style="margin:10px">
           <h3>Name: {{item.applicationinfo.name}}</h3>
           <h3>DOB: {{item.applicationinfo.dob}}</h3>
           <h3>SSN:{{item.applicationinfo.ssn}}</h3>
           <h3>Team Size:{{item.applicationinfo.num_team}}</h3>
            <b-button variant="primary">Approve </b-button>

         </div>
         <div class="column">
           <h1 style="margin:10px">Front of Id</h1>
        <img class="idbox"  :src="item.Idurl[1]" />
        </div>
         <div class="column">
           <h1 style="margin:10px" >Back of Id</h1>
         <img class="idbox" :src="item.Idurl[0]" />
         </div>
         </div>
  
    </b-card></b-collapse> </a>

    
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
        list_used_to_hide_info:[],


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

    async gettheApplications(){

        this.applications = await getApplications();
       // var objectcontaininghiddennornot;
        //console.log(this.applications.length);
        
       // console.log(this.users);
        if(this.applications!=null){
            this.showNotification('success', 'applications have been downloaded')
            for(var i = 0, size = this.applications.length; i < size ; i++){
          var item = {hidden:true};
          this.list_used_to_hide_info.push(item);
          //alert(item);

        }
        }

    },
    ApproveApplication(){

    },

  },
   beforeMount(){
    this.gettheApplications()
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
