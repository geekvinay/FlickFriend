// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBweODa0_l52HBoNVbEQpoKmMVOo1HncF8',
  authDomain: 'flickfriend-7815e.firebaseapp.com',
  projectId: 'flickfriend-7815e',
  storageBucket: 'flickfriend-7815e.appspot.com',
  messagingSenderId: '834284617200',
  appId: '1:834284617200:web:5233ada8d36f8da0f9b135'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
