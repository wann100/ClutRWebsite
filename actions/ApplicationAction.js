import firebase from "firebase/app";
import "firebase/storage";
//**
/**
 * This function gets all the current applications
 */
//
export async function getApplications() {
  var return_this = [];
  var userRef = firebase.database().ref("/applications/");
  await userRef.on("value", async snapshot => {
    //  console.log("hi");

    await snapshot.forEach(childSnapshot => {
      //   console.log(childSnapshot.key);
      if (
        childSnapshot.val().applicationDetails.status == "pending" ||
        childSnapshot.val().applicationDetails.status == "denied"
      ) {
        var objecttoreturn = {
          applicationinfo: childSnapshot.val().applicationDetails,
          Idurl: downloadApplicationImages(childSnapshot.key)
        };
        // console.log(objecttoreturn);
        return_this.push(objecttoreturn);
      }
    });
  });

  return return_this;
}

/**
 * Dowload application uploaded id's
 * @param {*} application_id
 * @param {*} user_id
 */
export function downloadApplicationImages(user_id) {
  var return_this = [];
  const Frontref = firebase
    .storage()
    .ref(`applications/${user_id}`)
    .child("front_id");
  const Backref = firebase
    .storage()
    .ref(`applications/${user_id}`)
    .child("back_id");
  Frontref.getDownloadURL().then(url => {
    return_this.push(url);
  });
  Backref.getDownloadURL().then(url => {
    return_this.push(url);
  });
  return return_this;
}

export function updateApplication(application_id, nameofitemtoupdate, item) {
  if (nameofitemtoupdate === "status") {
    firebase
      .database()
      .ref(`applications/${application_id}/applicationDetails`)
      .update({
        status: item
      });
  }
}
