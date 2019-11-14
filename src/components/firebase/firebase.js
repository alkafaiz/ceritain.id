import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { identifier } from "@babel/types";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  //***Auth API */
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => {
    this.auth.signOut();
  };

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  };

  //*** User API */
  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  //*** Potential User API */
  email_pUserRef = () => this.db.ref("potentialUsers");
  email_pUsers = () => this.db.ref("potentialUsers");

  //*** Merge Auth and DB User API */
  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser=>{
    if(authUser){
      this.user(authUser.uid).once('value')
      .then(snapshot =>{
        const dbUser = snapshot.val();

        //default empty roles
        if(!dbUser.roles){
          dbUser.roles={}
        }
        //merge auth and dbUser
        authUser={
          uid:authUser.uid,
          email: authUser.email,
          ...dbUser,
        }

        next(authUser)

      })
    }else{
      fallback();
    }
  })
}

export default Firebase;
