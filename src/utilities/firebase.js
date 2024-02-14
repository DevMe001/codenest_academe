// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCG10GHU2VG_z8xlbn9cSQ2QjEhqyNymd8',
  authDomain: 'e-learning-add4c.firebaseapp.com',
  databaseURL: 'https://e-learning-add4c-default-rtdb.firebaseio.com',
  projectId: 'e-learning-add4c',
  storageBucket: 'e-learning-add4c.appspot.com',
  messagingSenderId: '1071548159248',
  appId: '1:1071548159248:web:c95af07f9d0207108ec195',
  measurementId: 'G-KT05G91NYE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
