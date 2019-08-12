import firebase from "firebase/app";
import "firebase/storage";

export function getAppointments(){
    var return_this = [];
    var userRef = firebase.database().ref("/appointments/");
    userRef.on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
           // console.log(childSnapshot.val());
          return_this.push(childSnapshot.val());
      });
    });
  
    return return_this;
  }

/**
 * 
 * @param {*} appointment_id 
 * @param {*} nameofitemtoupdate 
 * @param {*} item 
 */
 export function updateAppointment(appointment_id,nameofitemtoupdate,item){
 
 
   if(nameofitemtoupdate ==="dontasklist"){
     firebase.database().ref(`appointments/${appointment_id}`).update({
       dontasklist:item
      });
   }
 
 if(nameofitemtoupdate==="status"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     status:item
    });
 }
 if(nameofitemtoupdate==="cleaner_Id_1"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     cleaner_Id_1:item
    });
 }
 if(nameofitemtoupdate==="cleaner_Id_2"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     cleaner_Id_2:item
    });
 }
 
 if(nameofitemtoupdate==="cleaner_Id_3"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     cleaner_Id_3:item
    });
 }
 if(nameofitemtoupdate==="rating"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     rating:item
    });
 }
 if(nameofitemtoupdate==="checklistsubmitted"){
   firebase.database().ref(`appointments/${appointment_id}`).update({
     checklistsubmitted:item
    });
 }
 if(nameofitemtoupdate==="checklistsubmitted"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
      checklistsubmitted:item
     });
  }
 }