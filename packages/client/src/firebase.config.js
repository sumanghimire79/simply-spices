// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNBV1JUHLtZDGx3txmJKaRtq_dklxiHzU',
  authDomain: 'my-first-project-fp-class20.firebaseapp.com',
  projectId: 'my-first-project-fp-class20',
  storageBucket: 'my-first-project-fp-class20.appspot.com',
  messagingSenderId: '270243467589',
  appId: '1:270243467589:web:ed5a5697d43c92c9e12e2c',
  measurementId: 'G-L6HQEV3SDV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
