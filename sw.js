importScripts('https://www.gstatic.com/firebasejs/12.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.10.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCzEAgtaObHrIxkVqPxtmH5tSAVJjMulew",
  authDomain: "greeting-buddy.firebaseapp.com",
  projectId: "greeting-buddy",
  storageBucket: "greeting-buddy.firebasestorage.app",
  messagingSenderId: "1040850875564",
  appId: "1:1040850875564:web:e3d2658b94ec384d525b09"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/greeting-buddy/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
