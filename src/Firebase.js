  // Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCj5OERw2o0FnNmMYYNadUO-W8SE2ofIUQ",
  authDomain: "free-demo-projects.firebaseapp.com",
  databaseURL: "https://free-demo-projects-default-rtdb.firebaseio.com",
  projectId: "free-demo-projects",
  storageBucket: "free-demo-projects.appspot.com",
   messagingSenderId: "397563138953",
  appId: "1:397563138953:web:52698db28f4f738b93c758"
};

// Initialize Firebase app and database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
