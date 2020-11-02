import * as React from 'react';
import App from './components/App';
import firebase from "@react-native-firebase/app";
import Auth from "@react-native-firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLgBwLEQemNCjxvsNNkB3A7FkH4KeeHUc",
    authDomain: "trouve-ta-clope.firebaseapp.com",
    databaseURL: "https://trouve-ta-clope.firebaseio.com",
    projectId: "trouve-ta-clope",
    storageBucket: "trouve-ta-clope.appspot.com",
    messagingSenderId: "504590761293",
    appId: "1:504590761293:web:bd2315ead5686a1bc84b04",
    measurementId: "G-VC4FPBP9D7"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase, Auth};

function Setup(){
    return <App/>
}

export default Setup;
