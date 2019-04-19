import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyDvJ5PS0s0nbcVjttaCTk-t8Il6EETxABs",
    authDomain: "inmobiliariapaola-649e7.firebaseapp.com",
    databaseURL: "https://inmobiliariapaola-649e7.firebaseio.com",
    projectId: "inmobiliariapaola-649e7",
    storageBucket: "inmobiliariapaola-649e7.appspot.com",
    messagingSenderId: "1089349953487"
})

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
