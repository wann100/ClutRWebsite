<template>
  <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2 style="margin-left:40%">Prices</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
         

           <div class="columns">
              <div class="column">
                <h6>Service 1 Name :</h6>
                <quick-edit class="cleanerid" v-model="services.service1Name" @input="updateservices('service1Name',services.service1Name)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 1 Description :</h6>
                <quick-edit class="cleanerid" v-model="services.service1Description" @input="updateservices('service1Description',services.service1Description)"></quick-edit>
              </div>
              <div class="column">
                 <h6>Service 1 Price :</h6>
                <quick-edit class="cleanerid" v-model="services.service1Price" @input="updateservices('service1Price',services.service1Price)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 1 Price Per Bath for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service1PricePerBathApt" @input="updateservices('service1PricePerBathApt',services.service1PricePerBathApt)"></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 1 Price Per Bath for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service1PricePerBedHouse" @input="updateservices('service1PricePerBedHouse',services.service1PricePerBedHouse)"></quick-edit>
              </div>
                <div class="column">
                 <h6>Service 1 Price Per Bedroom for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service1PricePerBedApt" @input="updateservices('service1PricePerBedApt',services.service1PricePerBedApt)" ></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 1 Price Per Bedroom for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service1PricePerBedHouse" @input="updateservices('service1PricePerBedHouse',services.service1PricePerBedHouse)"></quick-edit>
              </div>
              
              
              </div>

               <div class="columns">
              <div class="column">
                <h6>Service 2 Name :</h6>
                <quick-edit class="cleanerid" v-model="services.service2Name" @input="updateservices('service2Name',services.service2Name)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 2 Description :</h6>
                <quick-edit class="cleanerid" v-model="services.service2Description" @input="updateservices('service2Description',services.service2Description)"></quick-edit>
              </div>
              <div class="column">
                 <h6>Service 2 Price :</h6>
                <quick-edit class="cleanerid" v-model="services.service2Price" @input="updateservices('service2Price',services.service2Price)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 2 Price Per Bath for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service2PricePerBathApt" @input="updateservices('service2PricePerBathApt',services.service2PricePerBathApt)"></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 2 Price Per Bath for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service2PricePerBedHouse" @input="updateservices('service2PricePerBedHouse',services.service2PricePerBedHouse)"></quick-edit>
              </div>
                <div class="column">
                 <h6>Service 2 Price Per Bedroom for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service2PricePerBedApt" @input="updateservices('service2PricePerBedApt',services.service2PricePerBedApt)" ></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 2 Price Per Bedroom for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service2PricePerBedHouse" @input="updateservices('service2PricePerBedHouse',services.service2PricePerBedHouse)"></quick-edit>
              </div>
              
              
              </div> 

               <div class="columns">
              <div class="column">
                <h6>Service 3 Name :</h6>
                <quick-edit class="cleanerid" v-model="services.service3Name" @input="updateservices('service3Name',services.service3Name)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 3 Description :</h6>
                <quick-edit class="cleanerid" v-model="services.service3Description" @input="updateservices('service3Description',services.service3Description)"></quick-edit>
              </div>
              <div class="column">
                 <h6>Service 3 Price :</h6>
                <quick-edit class="cleanerid" v-model="services.service3Price" @input="updateservices('service3Price',services.service3Price)"></quick-edit>
              </div>
               <div class="column">
                 <h6>Service 3 Price Per Bath for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service3PricePerBathApt" @input="updateservices('service3PricePerBathApt',services.service3PricePerBathApt)"></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 3 Price Per Bath for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service3PricePerBedHouse" @input="updateservices('service3PricePerBedHouse',services.service3PricePerBedHouse)"></quick-edit>
              </div>
                <div class="column">
                 <h6>Service 3 Price Per Bedroom for apartments:</h6>
                <quick-edit class="cleanerid" v-model="services.service3PricePerBedApt" @input="updateservices('service3PricePerBedApt',services.service3PricePerBedApt)" ></quick-edit>
              </div>
  <div class="column">
                 <h6>Service 3 Price Per Bedroom for House:</h6>
                <quick-edit class="cleanerid" v-model="services.service3PricePerBedHouse" @input="updateservices('service3PricePerBedHouse',services.service3PricePerBedHouse)"></quick-edit>
              </div>
              
              
              </div> 


         
        </div>

        <!-- how you get the userimage {{ this.applications[0].Idurl[0] }} !-->
      </div>

    </div>
  </div>
</template>


<script>


import { getServices,updateServices } from "@/../actions";
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
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
      services: null,
      currentUser: firebase.auth().currentUser,
      filteredProperty: "id",
      query: "",
      activeFilters: []
    };
  },
  mixins: [notifier],
  methods: {
    filtered() {
      var filtered = this.services;
      this.activeFilters.forEach(filter => {
        filtered = filtered.filter(record => {
          return filter.name === "name"
            ? new RegExp(filter.value, "i").test(record[filter.name])
            : record[filter.name] == filter.value;
          console.log(filter.value);
          //onsole.log(record);
        });
      });
      // console.log(filtered);
      console.log(filtered);
      return (this.appointments = filtered);
    },
    addFilter() {
      this.activeFilters.push({
        name: this.filteredProperty,
        value: this.query
      });
      this.filtered();
      this.query = "";
    },
    removeFilter(idx) {
      this.activeFilters.splice(idx, 1);
      this.getAllAppointments("approved");
    },

    getAllServices() {
      this.services = getServices();
      // console.log(this.users);
      if (this.services != null) {
        this.showNotification("success", "services have been downloaded");
      }
    },

    updateservices(whichdetails, details) {
      updateServices(whichdetails,details);
      //this.getAllAppointments("approved");
      this.showNotification("success", "services have been updated");
    },
    FilterFunction(filter_criteria) {},
  },
  beforeMount() {
    this.getAllServices();
  }
};
</script>

<style lang="scss" scoped>
.column > div {
  margin-top: 35px;
  &:first-child {
    margin-top: 0px;
  }
}

button {
  vertical-align: middle !important;
  margin-left: 30px;
}

.searchbox {
  width: 40%;
  font-weight: bold;
  border-radius: 5px;
}
.box {
  width: 120%;
  margin-left: -10%;
}
.column {
  text-align: center;
}

.columns {
  margin-top: 40px;
}
.cleanerid {
  font-size: 3mm;
}
h4 {
  font-size: 4mm;
}
</style>
