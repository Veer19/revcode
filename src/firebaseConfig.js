const firebaseConfig = {
    apiKey: "AIzaSyBWIKzKrmgJV7lSdVicPrQ5JqrGROR_SyY",
    authDomain: "revcode-19.firebaseapp.com",
    databaseURL: "https://revcode-19.firebaseio.com",
    projectId: "revcode-19",
    storageBucket: "revcode-19.appspot.com",
    messagingSenderId: "1093060922531",
    appId: "1:1093060922531:web:38ab8c7a62edbb24ad0316"
};
import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
export default {db,auth}