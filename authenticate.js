let tokenUrl = 'https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/oauth2/token';
let clientId = 'c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb';
let clientSecret = 'Gy0rAKFC/pN0LbO/ZqHIy-ItHaJ/vo79';
var request = require("request");
// const electronOauth2 = require('electron-oauth2');

// var config = {
//     clientId: clientId,
//     clientSecret: clientSecret,
//     authorizationUrl: 'https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/oauth2/token',
//     tokenUrl: tokenUrl,
//     useBasicAuthorizationHeader: false,
//     redirectUri: 'http://localhost'
// };


// const windowParams = {
//     alwaysOnTop: true,
//     autoHideMenuBar: true,
//     webPreferences: {
//         nodeIntegration: false
//     }
//   }

//   const options = {
//     state: 1234,
//   };

// const myApiOauth = electronOauth2(config, windowParams);

// myApiOauth.getAccessToken(options)
//     .then(token => {
//         console.log(token)

//       myApiOauth.refreshToken(token.refresh_token)
//         .then(newToken => {
//           //use your new token
//         });
// });
var request = require("request");

var options = {
  method: 'POST',
  url: tokenUrl ,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  form: {
    grant_type: 'client_credentials',
    client_id: "c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb",
    client_secret: clientSecret,
  },
  body: {
    grant_type: 'client_credentials',
    client_id: "c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb",
    client_secret: clientSecret,
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// var getAccessToken = function () {

//     return new Promise(function (resolve, reject) {

//         var url = tokenUrl;

//         var username = "eguha3@gatech.edu"; // Username of PowerBI "pro" account - stored in config
//         var password = 'Ayan1.Prabal2'; // Password of PowerBI "pro" account - stored in config
//         var clientId = clientId // Applicaton ID of app registered via Azure Active Directory - stored in config

//     var headers = {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         };

//         var formData = {
//             grant_type: 'client_credentials',
//             client_id: "c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb",
//             client_secret: clientSecret,
//             resource: 'https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/oauth2/?resource=https://telemedfhir.azurehealthcareapis.com',
//             username: username,
//             password: password
//         };
//         var body = {
//             grant_type: 'password',
//             client_id: "c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb",
//             client_secret: clientSecret,
//             resource: 'https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/oauth2/?resource=https://telemedfhir.azurehealthcareapis.com',
//             username: username,
//             password: password
//         };

//         console.log(request.post)

//         request.post({
//             url: url,
//             form: formData,
//             body: body,
//             headers: headers

//         }, function (err, result, body) {
//             console.log(body);
//         })
//     });
// }

// getAccessToken()