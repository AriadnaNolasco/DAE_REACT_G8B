// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBH0-qAVtlnnu0i03ZC6kMeSUEkwg6Cl4Y",
  authDomain: "mis-series-dc8d6.firebaseapp.com",
  projectId: "mis-series-dc8d6",
  storageBucket: "mis-series-dc8d6.firebasestorage.app",
  messagingSenderId: "814257557832",
  appId: "1:814257557832:web:cc66a6276f6f970769e37d",
  measurementId: "G-YQ12BVWYD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);