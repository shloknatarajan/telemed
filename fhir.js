var request = require("request");

function getPatient() {
	var options = {
		method: 'GET',
		url: 'https://telemedfhir.azurehealthcareapis.com/Patient',
		headers: {
			'cache-control': 'no-cache',
			Connection: 'keep-alive',
			'Content-Length': '350',
			'Accept-Encoding': 'gzip, deflate',
			Host: 'telemedfhir.azurehealthcareapis.com',
			'Postman-Token': '1d76292b-9eaa-4649-b1bb-f2bf4e053b6a,fda06146-dd14-4044-9505-914bcbd277b8',
			'Cache-Control': 'no-cache',
			Accept: '*/*',
			'User-Agent': 'PostmanRuntime/7.19.0',
			Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiJodHRwczovL3RlbGVtZWRmaGlyLmF6dXJlaGVhbHRoY2FyZWFwaXMuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDgyMTk4YmItYWU3Yi00YjI1LThiN2EtNmQ3ZjMyZmFhMDgzLyIsImlhdCI6MTU4NjIwOTMyOSwibmJmIjoxNTg2MjA5MzI5LCJleHAiOjE1ODYyMTMyMjksImFjciI6IjEiLCJhaW8iOiJBU1FBMi84UEFBQUE2VUdDdTlBc3lQMEFYVGY3cnFROXB4NGlZY2UwTU0zTkJLQmI4V3NZaGk4PSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJjOGY1NjhiNS1mMzlkLTRjMWItYTY4YS1jMDVhY2QxY2U2YmIiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikd1aGEiLCJnaXZlbl9uYW1lIjoiRXRhc2giLCJpcGFkZHIiOiIyNC44OC4xMDIuMjA3IiwibmFtZSI6Ikd1aGEsIEV0YXNoIEsiLCJvaWQiOiJlZTYyMjYzYy05MWUzLTQ0MWItYWNlOC1lMTU4ZWI4OGZlZjciLCJwdWlkIjoiMTAwMzdGRkVBQkYyNEQ2OSIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjFYWkt6c21sQmRmV2ZJMy11TC1LRHc1VkZNdGtEaXl0NlZhUEtrWVZ2bjgiLCJ0aWQiOiI0ODIxOThiYi1hZTdiLTRiMjUtOGI3YS02ZDdmMzJmYWEwODMiLCJ1bmlxdWVfbmFtZSI6ImVndWhhM0BnYXRlY2guZWR1IiwidXBuIjoiZWd1aGEzQGdhdGVjaC5lZHUiLCJ1dGkiOiJIUzVUUFItZ0xFV1BFbUNjeTRCVUFBIiwidmVyIjoiMS4wIn0.G1iunjqR8bXXaSqbixHXunEhSpE7D0PcaqriHqS2IXCSLgZi5o3SNe7uRXSh83_PtaGturC6bJr0dYhVPXIHi8LrHD9yqkPOYVE7UJu0-887n5W-dCPLL7VvqGuxKwf2FxGO1A0S-muqE5Xe4xAbWinFUB02XE2WUnNsmKqanKDisgqmz1SPUljxHqMcNxKWFFtdQJXmkm7IkIG-9Y6JW7Mk2x4DfGZRxEgoIK9gp_wjlLlKI5JU179ssxDHuHNPWdmGGPH25XKCQueWvU42fYGxcYLwRpubdDAW4NuktIyyUnUCzsIjQ8f5UB_pfVCnyqPfPX7kiwNHptFNkZVljQ',
			'Content-Type': 'application/json'
		},
		body: {},
		json: true
	};

	request(options, function(error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});
}
getPatient()

function postPatient() {
	var options = {
		method: 'POST',
		url: 'https://telemedfhir.azurehealthcareapis.com/Patient',
		headers: {
			'cache-control': 'no-cache',
			Connection: 'keep-alive',
			'Content-Length': '350',
			'Accept-Encoding': 'gzip, deflate',
			Host: 'telemedfhir.azurehealthcareapis.com',
			'Postman-Token': '1d76292b-9eaa-4649-b1bb-f2bf4e053b6a,44bf6c69-7f45-4ff6-a246-0cfa91cf06bb',
			'Cache-Control': 'no-cache',
			Accept: '*/*',
			'User-Agent': 'PostmanRuntime/7.19.0',
			Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiJodHRwczovL3RlbGVtZWRmaGlyLmF6dXJlaGVhbHRoY2FyZWFwaXMuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDgyMTk4YmItYWU3Yi00YjI1LThiN2EtNmQ3ZjMyZmFhMDgzLyIsImlhdCI6MTU4NjA1MzY0MSwibmJmIjoxNTg2MDUzNjQxLCJleHAiOjE1ODYwNTc1NDEsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84UEFBQUFwTHRBQmkvOTVsZ3BEMy9jQUxOWDNyS1FZT0JiOGJlYnlsMDVWM0lGaE40PSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJjOGY1NjhiNS1mMzlkLTRjMWItYTY4YS1jMDVhY2QxY2U2YmIiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikd1aGEiLCJnaXZlbl9uYW1lIjoiRXRhc2giLCJpcGFkZHIiOiIyNC44OC4xMDIuMjA3IiwibmFtZSI6Ikd1aGEsIEV0YXNoIEsiLCJvaWQiOiJlZTYyMjYzYy05MWUzLTQ0MWItYWNlOC1lMTU4ZWI4OGZlZjciLCJwdWlkIjoiMTAwMzdGRkVBQkYyNEQ2OSIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjFYWkt6c21sQmRmV2ZJMy11TC1LRHc1VkZNdGtEaXl0NlZhUEtrWVZ2bjgiLCJ0aWQiOiI0ODIxOThiYi1hZTdiLTRiMjUtOGI3YS02ZDdmMzJmYWEwODMiLCJ1bmlxdWVfbmFtZSI6ImVndWhhM0BnYXRlY2guZWR1IiwidXBuIjoiZWd1aGEzQGdhdGVjaC5lZHUiLCJ1dGkiOiJpOTJSQlY2TGwwYWpBZXc0SGZrWUFBIiwidmVyIjoiMS4wIn0.Mdn_lcuDdWx1zDXJKS-ar1NabEFe7zHPYvhrAGdkS6AVcfZ2M86qjCqEZZ1Ta5vkBesO9hdq15grbuzvorwgHspCRapjmch2uJZbGtJZV0QrodO3fK6bkRBsM0WlecuzpkiBhYURhtLjpYmAPBCMfDSZKcEy_e-ASO2hoQIwXHrOrE4Am47B2rxnVEAbE-jx3vTDDuU0c_tFdSIjUqQzB5SkhdsLNKpLlzU5tTZQ7_QL3yIvPV-ph9_VbgWuiRZHOOAsSYJpuo-Y0i0LttK5BXVTR8JSVc0I0jSz0eIAuAH0abXzOELeVqrd0yl6h8ocb8j0ZDdefFF6EUrK_6oFIw',
			'Content-Type': 'application/json'
		},
		body: {
			resourceType: 'Patient',
			active: true,
			name: [{
				use: 'official',
				family: 'Kirka',
				given: ['James', 'Tiberious']
			}, {
				use: 'usual',
				given: ['Jim']
			}],
			gender: 'male',
			birthDate: '1960-12-25'
		},
		json: true
	};

	request(options, function(error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
	});

}