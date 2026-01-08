import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Suas credenciais oficiais
const firebaseConfig = {
  apiKey: "AIzaSyC23gdYyXTTFaShymYySFuKJBYgSbkamdY",
  authDomain: "gcm-salvador-portal.firebaseapp.com",
  projectId: "gcm-salvador-portal",
  storageBucket: "gcm-salvador-portal.firebasestorage.app",
  messagingSenderId: "578659251170",
  appId: "1:578659251170:web:7b79771e794a37f8fcffbb"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, doc, getDoc };