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

// Import Admin SDK
var admin = require("firebase-admin");

var serviceAccount = require("./telemed-273100-firebase-adminsdk-zpd8v-327c0cc16a.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://telemed-273100.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("/");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function signUp(email, password) {
	return new Promise(resolve => {
		console.log(email)
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
			resolve(result)
		}).catch(function(error) {
			console.log(error)
			if (error) {
				resolve("not correct")
			}
		})
	})
}

async function signIn(email, password) {
	return new Promise(resolve => {
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			resolve(firebase.auth().currentUser)
		}).catch(function(error) {
			resolve("not correct")
		})
	})
}

function addUser(uid, first_name, last_name, role) {
	var usersRef = ref.child("users");
	usersRef.push().set({
		uid:uid,
		first_name: first_name,
		last_name: last_name,
		role: role
	});
}

function getUser(uid){
	var ref = db.ref("users");
	return new Promise(resolve => {
		ref.orderByChild("uid").equalTo(uid).on("child_added", function(snapshot) {
	  		resolve(snapshot.val())
		});
	})
}

exports.getUser = getUser
exports.addUser = addUser
exports.signUp = signUp
exports.signIn = signIn