let tokenUrl = 'https://login.microsoftonline.com/482198bb-ae7b-4b25-8b7a-6d7f32faa083/oauth2/token';
let clientId = 'c8f568b5-f39d-4c1b-a68a-c05acd1ce6bb';
let clientSecret = 'Gy0rAKFC/pN0LbO/ZqHIy-ItHaJ/vo79';
var request = require("request");


let getTokenRequest = {
    method: 'POST',
    url: tokenUrl,
    auth: {
        type: "basic",
        basic: [
            { key: "username", value: clientId },
            { key: "password", value: clientSecret }
        ]
    },
    body: {
        mode: 'formdata',
        formdata: [
            { key: 'grant_type', value: 'client_credentials' },
            { key: 'state', value: 1234 }
        ]
    }
};

// pm.sendRequest(getTokenRequest, (err, response) => {
//     let jsonResponse = response.json(),
//         newAccessToken = jsonResponse.access_token;

//     console.log({ err, jsonResponse, newAccessToken })

//     pm.environment.set('accessToken', newAccessToken);
//     pm.variables.set('accessToken', newAccessToken);
// 

request(getTokenRequest, function(error, response, body) {
        if (error){ 
            throw new Error(error);
        }

        console.log(body);
});