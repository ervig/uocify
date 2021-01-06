import firebase  from 'firebase';

// usad vuestros datos aquí:
var firebaseConfig = {
    apiKey: "AIzaSyC_viTP599JoA-ul4J5exFP20NPcjroluc",
    authDomain: "uocify-55469.firebaseapp.com",
    projectId: "uocify-55469",
    storageBucket: "uocify-55469.appspot.com",
    messagingSenderId: "254136049519",
    appId: "1:254136049519:web:c4e3d5f9d184310ae2d29a",
    measurementId: "G-WLHXMLY6EX"
};

const app = firebase .initializeApp(firebaseConfig);

export const db = app.database();