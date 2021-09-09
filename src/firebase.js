import firebase from "firebase/app";//app module of firbase
import "firebase/auth";//authentication of firbase module
import "firebase/firestore";//firestore module (database in firebase)
import "firebase/storage";
// this is used to connect to fiebase services
// details of the project
import config from "./config.json";


  firebase.initializeApp(config);//to connect to firbase services

  let provider = new firebase.auth.GoogleAuthProvider();//provider to login
  
  //object containing login/logout
  export const auth = firebase.auth();
  //object for firestore database
  export const firestore = firebase.firestore();
  //object for storage
  export const storage = firebase.storage();

  export const signInWithGoogle = ()=>{
      auth.signInWithPopup(provider);//login using provider popup
  }
  export default firebase;