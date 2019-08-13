import firebase from "firebase/app";

export function getusers() {}

export function updateUserDetails(currentUser,whichdetails,details) {
  //const { currentUser } = firebase.auth();

  switch (whichdetails) {
    case "cleanermode":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          cleanermode: details
        });
      break;
    case "lookingforwork":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          lookingforwork: details
        });
      break;
    case "points":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          points: details
        });
      break;
    case "currentlong":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          currentlong: details
        });
      break;
    case "currentlat":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          currentlat: details
        });
      break;
    case "workwithcleaners":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          workwithcleaners: details
        });
      break;
    case "currentappointmentid":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          currentappointmentid: details
        });
      break;
    case "cleanercurrentap":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          cleanercurrentapid: details
        });
      break;
    case "plaidtoken":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          plaid_token: details
        });
      break;
    case "institutionname":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          institution_name: details
        });
      break;
    case "institutionid":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          institution_id: details
        });
      break;
    case "plaidaccountnumber":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          plaid_last_four: details
        });
      break;
    case "plaidaccounttype":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          plaid_account_type: details
        });
      break;

    case "plaidaccountid":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          plaid_account_id: details
        });
      break;

    case "numberofappointmentscompleted":
      firebase
        .database()
        .ref(`/users/${currentUser.currentUseruid}/userDetails`)
        .update({
          numofapptcompleted: details
        });
      break;
      case "isCleaner":
        firebase
          .database()
          .ref(`/users/${currentUser.currentUseruid}/userDetails`)
          .update({
            isCleaner: details
          });
        break;
  }
}

export function userDetailsFetch() {
  var return_this = [];
  var currentUser = firebase.auth().currentUser;
  var userRef = firebase.database().ref("/users/");
  //console.log("hi")
  userRef.on("value", snapshot => {
   // console.log("hi");
    snapshot.forEach(childSnapshot => {
      // childSnapshot.forEach((smallerChildSnapshot) => {
      //console.log("hi");
      if (childSnapshot.val().userDetails.role !== "admin") {
        //console.log(childSnapshot.val().userDetails.role)

        return_this.push(childSnapshot.val());
      }

      // });
    });
  });

  return return_this;
}
export function getUser(userid) {
   var return_this = [];
    //var currentUser = firebase.auth().currentUser;
    var userRef =   firebase.database().ref(`/users/${userid}/userDetails`) ;
    userRef.on("value", snapshot => {

        return_this.push(snapshot.val());
}  );
  
    return return_this;
  }
  