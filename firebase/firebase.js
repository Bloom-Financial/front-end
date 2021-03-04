import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: "AIzaSyDyWjRyOAhVzWWACDAuXM2SrXJUXy_IOdc",
  authDomain: "bloom-financial.firebaseapp.com",
  projectId: "bloom-financial",
  storageBucket: "bloom-financial.appspot.com",
  messagingSenderId: "601223708778",
  appId: "1:601223708778:web:d00ae8e4922415b357ca13",
  measurementId: "G-HLJDG1TQMQ"
};
class Firebase{
  constructor(){
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.database();
    this.storage = firebase.storage();
    this.functions = firebase.functions();
  }
}
export default Firebase;
