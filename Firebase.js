// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgpAhXoWRBSW3dZG9Ba00pf9GUA90zoA8",
  authDomain: "fyp-ptm-51ba6.firebaseapp.com",
  projectId: "fyp-ptm-51ba6",
  storageBucket: "fyp-ptm-51ba6.appspot.com",
  messagingSenderId: "794709354832",
  appId: "1:794709354832:web:a1cb55476e04c8fd0ba455",
  measurementId: "G-EQDV0PTY5E",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const analytics = getAnalytics(app);

const auth = firebase.auth();
export { auth };
