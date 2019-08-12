import firebase from "firebase/app";
import "firebase/storage";
//**
/**
 * This function gets all the current applications
 */
//
export function getApplications(){
    var return_this = [];
    var userRef = firebase.database().ref("/applications/");
    userRef.on("value", snapshot => {
      //  console.log("hi");
      
      snapshot.forEach(childSnapshot => {
         //   console.log(childSnapshot.key);
          var objecttoreturn={applicationinfo:childSnapshot.val().applicationDetails,Idurl:downloadApplicationImages(childSnapshot.key)};
        // console.log(objecttoreturn);
          return_this.push(objecttoreturn);
      });
    });
  
    return return_this;
  }

/**
 * Dowload application uploaded id's
 * @param {*} application_id 
 * @param {*} user_id 
 */
export function downloadApplicationImages(user_id){
    var return_this = [];
    const Frontref = firebase.storage().ref(`applications/${user_id}`).child("front_id");
    const Backref = firebase.storage().ref(`applications/${user_id}`).child("back_id");
    Frontref.getDownloadURL().then((url)=>{return_this.push(url)} )
    Backref.getDownloadURL().then((url)=>{return_this.push(url)} )
    return return_this;
    }