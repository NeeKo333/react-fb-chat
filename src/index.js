import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfNcEZ8drZllA9EAmWx9zQ7gA_P8wIzws",
  authDomain: "chat-d7c5e.firebaseapp.com",
  projectId: "chat-d7c5e",
  storageBucket: "chat-d7c5e.appspot.com",
  messagingSenderId: "595499284509",
  appId: "1:595499284509:web:8dc2521aa83109828b6ef4",
  measurementId: "G-QKTVG17954",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore(app);
// const firestore = initializeFirestore(app, {
//   experimentalForceLongPolling: true, // this line
//   useFetchStreams: false, // and this line
// });

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Context.Provider value={{ auth, firestore }}>
    <App />
  </Context.Provider>
);
