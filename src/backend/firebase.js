import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsV8Duy3nCbR-BHDVXXvzhm36MPIGWht0",
  authDomain: "to-do-list-15bca.firebaseapp.com",
  databaseURL:
    "https://to-do-list-15bca-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "to-do-list-15bca",
  storageBucket: "to-do-list-15bca.appspot.com",
  messagingSenderId: "648962249845",
  appId: "1:648962249845:web:9a71f8032fa0526677d43c",
  measurementId: "G-H3PGX4DJCG",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
