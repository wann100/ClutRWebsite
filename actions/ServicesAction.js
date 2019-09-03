import firebase from "firebase/app";
import { returnStatement } from "@babel/types";



export function getServices(){

 var returnStatement

    firebase.database().ref(`services/ServiceDetails/`)
      .on('value', snapshot => {

          returnStatement = snapshot.val();
}  );


//Where I will get current services so I can display them

return returnStatement;

}

export function updateServices(whichservice,details){

    switch (whichservice) {
        case "service1Description":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1Description: details
            });
          break;
          case "service1Name":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1Name: details
            });
          break;   
          case "service1Price":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1Price: details
            });
          break;  
          case "service1PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1PricePerBathApt: details
            });
          break;  

          case "service1PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1PricePerBathApt: details
            });
          break;  

          case "service1PricePerBathHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1PricePerBathAptHouse: details
            });
          break;  

               case "service1PricePerBedApt":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1PricePerBedApt: details
            });
          break;  
          case "service1PricePerBedHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service1PricePerBedHouse: details
            });
          break;  

          case "service2Description":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2Description: details
            });
          break;
          case "service2Name":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2Name: details
            });
          break;   
          case "service2Price":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2Price: details
            });
          break;  
          case "service2PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2PricePerBathApt: details
            });
          break;  

          case "service2PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2PricePerBathApt: details
            });
          break;  

          case "service2PricePerBathHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2PricePerBathAptHouse: details
            });
          break;  

               case "service2PricePerBedApt":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2PricePerBedApt: details
            });
          break;  
          case "service2PricePerBedHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service2PricePerBedHouse: details
            });
          break;  


          /////

          case "service3Description":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3Description: details
            });
          break;
          case "service3Name":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3Name: details
            });
          break;   
          case "service3Price":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3Price: details
            });
          break;  
          case "service3PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3PricePerBathApt: details
            });
          break;  

          case "service3PricePerBath":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3PricePerBathApt: details
            });
          break;  

          case "service3PricePerBathHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3PricePerBathAptHouse: details
            });
          break;  

               case "service3PricePerBedApt":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3PricePerBedApt: details
            });
          break;  
          case "service3PricePerBedHouse":
            firebase.database().ref(`services/ServiceDetails/`)
            .update({
                service3PricePerBedHouse: details
            });
          break;  

        }
}