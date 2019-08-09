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

  {{ this.users }}
    </div>
    
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
  methods: {

    getusers(){

        this.users = userDetailsFetch();
       // console.log(this.users);
        if(this.users!=null){
            this.showNotification('success', 'Users Dowloaded')
        }


    },
    updateUser(){

    },
    addDemoContentsData() {
      let storageRef = firebase.storage().ref();
      Object.keys(this.demoContentsData).map(key => {
        let hashKey = _.find(this.contents, { name: key })[".key"];

        this.demoContentsData[key].map(content => {
          let imageName = content.title ? `tamiat-${content.title}.png` : `tamiat-${content.author}.png`;
          let ImageRef = storageRef.child("images/" + imageName);
          let imgDownloadURL = "";
          //if condition prevents the function from uploading an empty file when demo content does not have img property(Post, News...) Othervise it will upload a text/html file instead of an image since the promise returned undefined and the browser will say that the image was blocked by CORB (since it is a text/html file)
          
          if(!content.img){
            content.img = "https://raw.githubusercontent.com/tamiat/tamiat/master/src/app/assets/img/coast.jpg"
            }
          this.fetchBlob(content.img)
            .then(blob => {
              return ImageRef.put(blob);
            })
            .then(snapshot => {
              return snapshot.ref.getDownloadURL();
            })
            .then(downloadURL => {
              imgDownloadURL = downloadURL;
              content.created = Date.now();
              content.img = imgDownloadURL;
              return this.$firebaseRefs.contents
                .child(hashKey + "/data")
                .push(content);
            })
            .then(() => {
              return this.$firebaseRefs.media.push({
                name: imageName,
                path: ImageRef.fullPath,
                src: imgDownloadURL
              });
            });
        });
      });
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
</style>
