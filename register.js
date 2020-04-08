const firebase = require("./firebase.js")

document.getElementById('submit').addEventListener('click', () => {
	var email = document.getElementById("inputEmail").value
	var password = document.getElementById("inputPassword").value
	var role = document.getElementById("exampleFormControlSelect2").value
	var firstName = document.getElementById("inputFirstName").value
	var lastName = document.getElementById("inputLastName").value

	var sex = document.getElementById("exampleFormControlSelect1").value
	console.log(email)
	console.log(password)
	firebase.signUp(email, password).then(function(result){
		firebase.addUser(result.user.uid, firstName, lastName, role)
		window.location.href = "login.html"
	})
})

