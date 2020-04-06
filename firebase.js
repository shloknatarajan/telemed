// Your web app's Firebase 
var firebase = require('firebase');
var firebaseConfig = {
	apiKey: "AIzaSyAJcy1l0cPa5hAvezHNpJBWHuMwCagas9c",
	authDomain: "telemed-273100.firebaseapp.com",
	databaseURL: "https://telemed-273100.firebaseio.com",
	projectId: "telemed-273100",
	storageBucket: "telemed-273100.appspot.com",
	messagingSenderId: "741029065341",
	appId: "1:741029065341:web:193b449fd4389d42e63714",
	measurementId: "G-N9DVF8PMJN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function signUp(email, password) {
	return new Promise(resolve => {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result){
			resolve(result)
		}).catch(function(error){
			if(error){
				resolve("not correct")
			}
		})
	})
}

async function signIn(email, password) {
	return new Promise(resolve => {
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
			resolve(firebase.auth().currentUser)
		}).catch(function(error){
			resolve("not correct")
		})
	})
}


exports.signUp = signUp	
exports.signIn = signIn