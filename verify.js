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

email = "etashthebomb@gmail.com"
password  = "Ayan1&Etash2"
function signUp() {
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result){
		alert("user create")
	}).catch(function(error){
		if(err){
			console.log(err)
			return;
		}
	})
}

function signIn() {
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
		console.log(result)
		alert("sign in succesful")
	}).catch(function(error){
		if(err){
			console.log(err)
			return;
		}
	})
}
signIn()