import firebase from "firebase";
import { call } from "react-native-reanimated";

class Fire {
    constructor () {
        this.init()
        this.checkAuth()
    }
    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDLgBwLEQemNCjxvsNNkB3A7FkH4KeeHUc",
                authDomain: "trouve-ta-clope.firebaseapp.com",
                databaseURL: "https://trouve-ta-clope.firebaseio.com",
                projectId: "trouve-ta-clope",
                storageBucket: "trouve-ta-clope.appspot.com",
                messagingSenderId: "504590761293",
                appId: "1:504590761293:web:bd2315ead5686a1bc84b04",
                measurementId: "G-VC4FPBP9D7"
            })
        }
    };
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    };
    send = messages => {
        messages.forEach(item => {
            const message = {
                text : item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const{key: _id} = message
        const createAt = new Date(timestamp)

        return {
            _id,
            createAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages")
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();