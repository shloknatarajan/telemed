const firebase = require("./firebase.js")

document.getElementById('login').addEventListener('click', () => {
	var email = document.getElementById("email").value
	var password = document.getElementById("password").value
	firebase.signIn(email, password).then(function(result){
		if(result != "not correct"){
			window.location.href = "helpPatient.html"
		}
	})
})
