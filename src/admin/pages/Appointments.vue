<template>
  <div class="container">
    <!-- notification -->
    <transition mode="out-in" name="fade">
      <div v-if="notification.message" :class="'notification is-' + notification.type">
        <button class="delete" @click="hideNotifications"></button>
        {{notification.message}}
      </div>
    </transition>

    <h2 style="margin-left:40%">Appointments</h2>
    <div class="box">
      <div class="columns">
        <div class="column">
          <select v-model="filteredProperty">
            <option value="customerid">Customer Id</option>
            <option value="cleaner_Id_1">Cleaner Id</option>
            <option value="id">id</option>
            <option value="status">status</option>
          </select>
          <input placeholder="filter value" v-model="query" />
          <button @click="addFilter">add filter</button>
          <hr />
          <table v-if="activeFilters.length">
            <tr style="width: 100px">
              <th colspan="3">Filters in use:</th>
            </tr>
            <tr v-for="(filter, index) in activeFilters" :key="index">
              <td>{{ filter.name }}:</td>
              <td>{{ filter.value }}</td>
              <td style="padding-left: 10px;">
                <a href="#" @click.prevented="removeFilter(index)">remove</a>
              </td>
            </tr>
          </table>
          <hr v-if="activeFilters.length" />
        </div>

        <!-- how you get the userimage {{ this.applications[0].Idurl[0] }} !-->
      </div>

      <a class="img-container" v-for="(item, key) in appointments" :key="key">
        <!--  This is how you create a collapsible list using the key and array !-->
        <div class="columns">
          <b-button
            class="buttonstyle"
            v-b-toggle="'collapse-'+key"
            variant="primary"
          >View: {{item.id}}</b-button>
        </div>
        <b-collapse :id="'collapse-'+key">
          <b-card>
            <div class="columns">
              <div class="column">
                <h6>customerid:</h6>
                <quick-edit class="cleanerid" v-model="item.customerId"></quick-edit>
              </div>
              <div class="column">
                <h6>cleanerid:</h6>
                <quick-edit
                  class="cleanerid"
                  @input="updateappointments(item.id,'cleaner_ID_1',item.cleaner_ID_1)"
                  v-model="item.cleaner_Id_1"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>Status:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'status',item.status)"
                  v-model="item.status"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>listup</h6>
                <quick-edit
                  @input="updateappointments(item.id,'checklistsubmitted',item.checklistsubmitted)"
                  type="boolean"
                  v-model="item.checklistsubmitted"
                ></quick-edit>
              </div>

              <div class="column">
                <h6>Service:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'service',item.service)"
                  v-model="item.servicename"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>DateofRequest:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'dateofAppointmentRequest',item.dateofAppointmentRequest)"
                  v-model="item.dateofAppointmentRequest"
                ></quick-edit>
              </div>

              <div class="column">
                <h6>TimeofRequest:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'timeofappointmentRequest',item.timeofappointmentRequest)"
                  v-model="item.timeofappointmentRequest"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>Rating:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'timeofappointmentRequest',item.rating)"
                  v-model="item.rating"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>price:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'price',item.price)"
                  v-model="item.price"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>customerphone:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'customerPhone',item.customerPhone)"
                  v-model="item.customerPhone"
                ></quick-edit>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h6>Address:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'property_address',item.property_address)"
                  v-model="item.property_address"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>Type of Property:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'typeof',item.typeof)"
                  v-model="item.typeof"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>lockbox code:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'lockboxcode',item.lockboxcode)"
                  v-model="item.lockboxcode"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>Number of bathrooms:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'numberofbathrooms',item.numberofbathrooms)"
                  v-model="item.numberofbathrooms"
                ></quick-edit>
              </div>
              <div class="column">
                <h6>Number of bedrooms:</h6>
                <quick-edit
                  @input="updateappointments(item.id,'numberofbedrooms',item.numberofbedrooms)"
                  v-model="item.numberofbedrooms"
                ></quick-edit>
              </div>
            </div>
          </b-card>
        </b-collapse>
      </a>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { demoData } from "@/../tamiat.config.json";
import { getAppointments, getUser, updateAppointment } from "@/../actions";
import notifier from "@/admin/mixins/notifier";
import QuickEdit from "vue-quick-edit";
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
      appointments: null,
      currentUser: firebase.auth().currentUser,
      filteredProperty: "id",
      query: "",
      activeFilters: []
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
    filtered() {
      var filtered = this.appointments;
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

    getAllAppointments(filter) {
      this.appointments = getAppointments(filter);
      // console.log(this.users);
      if (this.applications != null) {
        this.showNotification("success", "appointments have been downloaded");
      }
    },
    ApproveAppointments() {},

    updateappointments(appointment_id, nameofitemtoupdate, item) {
      updateAppointment(appointment_id, nameofitemtoupdate, item);
      this.getAllAppointments("approved");
    },
    FilterFunction(filter_criteria) {},
    getuser(userid) {
      return getUser(userid);
    }
  },
  beforeMount() {
    this.getAllAppointments("approved");
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
