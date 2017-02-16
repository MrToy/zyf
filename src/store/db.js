import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyDapP4sBxFMM_2ix93EuOaQjF0bSRq2Iww",
    authDomain: "zhouyufu-9670b.firebaseapp.com",
    databaseURL: "https://zhouyufu-9670b.firebaseio.com",
    storageBucket: "zhouyufu-9670b.appspot.com",
    messagingSenderId: "698497187014"
}
firebase.initializeApp(config)

export default firebase.database()