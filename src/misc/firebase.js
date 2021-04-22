import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBjGl_SgZskcpYrd-1buy81QVTUvn2eK00',
  authDomain: 'chat-web-app-70105.firebaseapp.com',
  databaseURL: 'https://chat-web-app-70105-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-70105',
  storageBucket: 'chat-web-app-70105.appspot.com',
  messagingSenderId: '945070872870',
  appId: '1:945070872870:web:48dbc4cb84039884c4c9e7',
};

const app = firebase.initializeApp(config);
