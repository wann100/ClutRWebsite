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
          <div>
    <select v-model="filteredProperty">
      <option value="name">name</option>
      <option value="dob">dob</option>
      <option value="ssn">ssn</option>
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

  
 <div>
 
</div>
 <a class="img-container" v-for="(item, key) in applications" :key="key"   >
<!--  This is how you create a collapsible list using the key and array !-->
     <div class="columns">
         <b-button    v-b-toggle="'collapse-'+key"  variant="primary">View/Approve: {{item.applicationinfo.name}}</b-button>       
    </div>
   <b-collapse    :id="'collapse-'+key"  >
    <b-card>
       <div class="columns"  >
         <div class="column" style="margin:10px">
           
           <h3>Name: {{item.applicationinfo.name}}</h3>
           <h3>DOB: {{item.applicationinfo.dob}}</h3>
           <h3>SSN:{{item.applicationinfo.ssn}}</h3>
           <h3>Team Size:{{item.applicationinfo.num_team}}</h3>
           <h3>Status:{{item.applicationinfo.status}}</h3>
            <b-button variant="primary" @click="ApproveApplication(getuserinfo(item.applicationinfo.id),'isCleaner',true)" >Approve </b-button>
         <b-button variant="danger" @click="DenyApplication(getuserinfo(item.applicationinfo.id),'isCleaner',false)" >Deny </b-button>
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
import {getApplications,downloadApplicationImages,getUser,updateUserDetails,updateApplication} from "@/../actions"
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
        filteredProperty: 'name',
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
  
  methods: {
    /**
     * This function gets the applications that are not approved
     */
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
    filtered () {
      var filtered =this.applications;
      this.activeFilters.forEach(filter => {
        
        filtered = filtered.filter(record => {
          //console.log(record["applicationinfo"][filter.name]);
          return filter.name === 'name'
            ? new RegExp(filter.value, 'i').test(record["applicationinfo"][filter.name])
            : record["applicationinfo"][filter.name] == filter.value; 
            //console.log(filter.value);
             //onsole.log(record);
        })
        
      })
     // console.log(filtered);
       console.log(filtered);
      return this.applications = filtered
    },
    /**
     * This is called in order to approve applcation
     */
    async ApproveApplication(currentUser,whichdetails,details){
      //First update usersdetails so that they can login
       console.log(currentUser[0].uid)
        await  updateUserDetails(currentUser[0],whichdetails,details);
      //Then update the application status so that it doesnt show up on this menu
       await   updateApplication(currentUser[0].uid,"status",'approved');
          //Then update the screen by re loading the applications back in
          this.showNotification('success', 'Application has been approved')
          this.gettheApplications();
 },
   /**
     * This is called in order to deny applcation
     */
    async DenyApplication(currentUser,whichdetails,details){
      //Then update the application status so that it doesnt show up on this menu
       await   updateApplication(currentUser[0].uid,"status",'denied');
          //Then update the screen by re loading the applications back in
          this.showNotification('success', 'Application has been denied')
          this.gettheApplications();
 },
 addFilter () {
      this.activeFilters.push({
        name: this.filteredProperty,
        value: this.query
      })
      this.filtered ()
      this.query = ''
    },
    removeFilter (idx) {
      this.activeFilters.splice(idx, 1)
      this.gettheApplications();
    },

 /**
  * So that we can call this function inside of our template
  */
  getuserinfo(userid_input){
    return getUser(userid_input);
 },

  },
   /**
  *Loads pending applications when screen loads
  */
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
.columns{
    margin-top:40px;

}
</style>
