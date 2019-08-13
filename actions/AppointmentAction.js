import firebase from "firebase/app";
import "firebase/storage";

export function getAppointments(condition){
    var return_this = [];
    var userRef = firebase.database().ref("/appointments/");
    userRef.on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
           // console.log(childSnapshot.val());
           if(childSnapshot.val().status!=condition){

            return_this.push(childSnapshot.val());
           }
          
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
 if(nameofitemtoupdate==="service"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        service:item
     });
  }
  if(nameofitemtoupdate==="dateofAppointmentRequest"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        dateofAppointmentRequest:item
     });
  }
  if(nameofitemtoupdate==="dateofAppointmentRequest"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        dateofAppointmentRequest:item
     });
  }
  if(nameofitemtoupdate==="timeofappointmentRequest"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        timeofappointmentRequest:item
     });
  }
  if(nameofitemtoupdate==="customerPhone"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        customerPhone:item
     });
  }
  if(nameofitemtoupdate==="price"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        price:item
     });
  }
  if(nameofitemtoupdate==="property_address"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        property_address:item
     });
  }
  if(nameofitemtoupdate==="typeof"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        typeof:item
     });
  }
  if(nameofitemtoupdate==="lockboxcode"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        lockboxcode:item
     });
  }
  if(nameofitemtoupdate==="numofbathrooms"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        numofbathrooms:item
     });
  }
  if(nameofitemtoupdate==="numofbedrooms"){
    firebase.database().ref(`appointments/${appointment_id}`).update({
        numofbedrooms:item
     });
  }
 }