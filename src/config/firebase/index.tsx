// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getAuth} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtXbcxQj7sOQ9QYA8KJesV3gUAc_8S-Ks',
  authDomain: 'madfinal-356aa.firebaseapp.com',
  projectId: 'madfinal-356aa',
  storageBucket: 'madfinal-356aa.firebasestorage.app',
  messagingSenderId: '742059055014',
  appId: '1:742059055014:web:accbc5f1f4afe743b6a167',
  databaseURL: 'https://madfinal-356aa-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Singleton pattern for Auth initialization
const auth = getAuth(app);
export {app, auth};
