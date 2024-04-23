
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 
  getAuth, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'


const firebaseConfig = {
  apiKey: "AIzaSyCW6W3gA6cfvQv2z7jKKAmXvNMSr3iAQqQ",
  authDomain: "trabajo-c2ba5.firebaseapp.com",
  databaseURL: "https://trabajo-c2ba5-default-rtdb.firebaseio.com",
  projectId: "trabajo-c2ba5",
  storageBucket: "trabajo-c2ba5.appspot.com",
  messagingSenderId: "1045880757096",
  appId: "1:1045880757096:web:8577a7088ec1b0eb9e54dd",
  measurementId: "G-ET5MCS8HDX"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//metodo de autenticacion de usuario
export const loginauth=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)

//cerrar sesion del usuario
export const loginout=()=>
  signOut(auth)

//estado del usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href='../login.html'
    }
  });
}