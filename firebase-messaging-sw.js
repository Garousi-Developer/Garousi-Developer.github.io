
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAL82YlbFIFHz4BNJDk_JEe0789y5JCxKk",
    authDomain: "nahang-de8c1.firebaseapp.com",
    databaseURL: "https://nahang-de8c1.firebaseio.com",
    projectId: "nahang-de8c1",
    storageBucket: "nahang-de8c1.appspot.com",
    messagingSenderId: "506630173398",
    appId: "1:506630173398:web:5678c57a408ea682448f77",
    measurementId: "G-JJRYWLP7EN"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});