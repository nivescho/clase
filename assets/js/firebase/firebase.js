  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
  import { getFirestore, collection, addDoc,onSnapshot, deleteDoc, doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBFkZNk_z2RaIlABXXlGoMCnqAQXi9UG2E",
    authDomain: "prueba-firebase-f8bc8.firebaseapp.com",
    projectId: "prueba-firebase-f8bc8",
    storageBucket: "prueba-firebase-f8bc8.appspot.com",
    messagingSenderId: "540400810689",
    appId: "1:540400810689:web:5ab360685364090654b240",
    measurementId: "G-NVDN6HDZCK"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore();

// Funciones del CRUD


export const createTask = (title, description,displayName,date,time,photoURL) => addDoc(collection(db, "tasks"), {title, description,displayName,date,time,photoURL});

export const onGetTask =(callback)=> onSnapshot(collection(db,"tasks"), callback);


export const deleteTask = id => deleteDoc(doc(db,"tasks",id));

export const getTask = id => getDoc(doc(db,"tasks",id));

export const updateTask = (id,newFields) => updateDoc (doc(db,"tasks",id),newFields);
