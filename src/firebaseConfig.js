import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVJRwJ4Wyr0wMmn_5_QvlASXq3wgmWZ50",
  authDomain: "comision-54095.firebaseapp.com",
  projectId: "comision-54095",
  storageBucket: "comision-54095.appspot.com",
  messagingSenderId: "249230728127",
  appId: "1:249230728127:web:40df524faccbb735b8df0a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
