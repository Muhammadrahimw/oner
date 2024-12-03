// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBMnStqdIS5jf40HTKpPbs_HDi0zhRmO48",
	authDomain: "oner-server.firebaseapp.com",
	projectId: "oner-server",
	storageBucket: "oner-server.firebasestorage.app",
	messagingSenderId: "590460771054",
	appId: "1:590460771054:web:71ae459b2c0e16460231ff",
	measurementId: "G-0NQF5152Z6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
