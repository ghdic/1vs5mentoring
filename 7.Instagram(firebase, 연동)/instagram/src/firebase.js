import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB3-euc9x70Yw-pOSNfMVGozzc0Z3Yck5s",
    authDomain: "instagram3-fd70c.firebaseapp.com",
    projectId: "instagram3-fd70c",
    storageBucket: "instagram3-fd70c.appspot.com",
    messagingSenderId: "322301253707",
    appId: "1:322301253707:web:56b7ae395f5cc632c915ce",
    measurementId: "G-PT05TS9ERR"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export {storage, auth};