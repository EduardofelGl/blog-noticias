import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByYrOZ0GRXVNwG96_0W1uw65Yhnjxoo78",
    authDomain: "blog-noticias-95cc7.firebaseapp.com",
    projectId: "blog-noticias-95cc7",
    storageBucket: "blog-noticias-95cc7.appspot.com",
    messagingSenderId: "577680287088",
    appId: "1:577680287088:web:02e4fb4be01aca355fdbb5",
    measurementId: "G-4M68KP5FH8"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
