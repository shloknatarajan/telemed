const createResource = async (
  token,
  projectId,
  cloudRegion,
  datasetId,
  fhirStoreId,
  resourceType
) => {
  // Token retrieved in callback
  // getToken(serviceAccountJson, function(cb) {...});
  // const cloudRegion = 'us-central1';
  // const projectId = 'adjective-noun-123';
  // const datasetId = 'my-dataset';
  // const fhirStoreId = 'my-fhir-store';
  // const resourceType = 'Patient';
  const parentName = `${BASE_URL}/projects/${projectId}/locations/${cloudRegion}`;

  const resourcePath = `${parentName}/datasets/${datasetId}/fhirStores/${fhirStoreId}/fhir/${resourceType}`;

  const postData = {
    resourceType: resourceType,
  };

  const options = {
    url: resourcePath,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/fhir+json; charset=utf-8',
    },
    body: postData,
    json: true,
    method: 'POST',
  };

  try {
    const resource = await request(options);
    console.log(
      `Created FHIR resource ${resourceType} with ID ${resource.id}.`
    );
  } catch (err) {
    console.error(err);
  }
};
service_account = {
  "type": "service_account",
  "project_id": "telemedfhir",
  "private_key_id": "d9679b59804c2694f9609d4f04caa3c8816dd985",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDs9nuuYHo9+5IP\nOHxcmhjrdMTibnQQlh6oYAunUO6RN92ADGVP4xK3l7RdnIV5zBfcFckvTpCrL/b3\nGLz3EPh2d0NxHTm2NBWijtMRmU4QIpEa4/0+RKgGY76Qq8xxSA4q+Klp1YbId/cV\nmKC/NYcYE2F8eFTsu+nYbgCP9sWw2E2HKsmbTjp1CWSMCoWYRUjs0tenFrHbbmDM\namv/HLRppWKJRYhlDu6cyKh8ijpwTEcBrxnljxYBWtZmjMdEj5N/EUQIQy6NU0ay\nwbCb//a318lmf1gE8ObebMPCYe2uSyYs1ODyDv4PjSZTDsV+UdufI65nnBS4ro8E\ne2tqqM2XAgMBAAECggEAAaHrFTb18KJgjblKZgrrvAeIabTwGMMn/+n1epgcpKR5\nYq3zLrs2QEyLwg9XfhDRY0NFKQ3GAl/ouCgT+THFPG+y578XTDGMqpuISblAJ+1N\nCZ3jez/W1oBuaim81VT1QAeJh0Cg1pW4/o2YIekY/qn3hHeBwkXDJSoQ1+0PzJmV\nflhT4XTHmhEaaEf0Ph0UF67pvPJ+hR6LhsbjoT/EOkZSQqiSfAYebu2OON09FFow\nVYtg0eR7oIT/YJ/ubswm576a+N7Njdh1kwpfq0+vSDElgU5CBvgrG+x6E/CtQ3+T\nS5gFltG9Jog2s0rnAKQeSJO+cJcmysOJRhxvW323CQKBgQD4T/rBqMvHUY27olUg\nQp81UgVPs8TC2FLWgfgC60yRLdSc5UQuTriQlfnNZG8aPJJzq1dQKKrWhWpCt/Xs\nBP4jJzssVNoFT7/2LUZ68ENj8gQ5jmFIMvqh6S6dpx6N06ZR8/ecdLt67OiqDkeD\nLPG/6Bkr2yxA5WI3x3l3yHPGyQKBgQD0TI0spCw7qOUi4iH2cqrHensTy3+Yev2w\nqgi3z9T4ZuEx8um9ioN3zGnYTf49omwKfMdHvdqZEY6LZCMn8mh//ocoKFcPW55q\nmn1b1qC8zPRWCZSox+24Sj5ucicxQseIboymYw7sKPTeEopsQEwFxlWgsYYBzOAF\nylr9B/FBXwKBgQCWqVBoOFaMNTtd4Xzs+f9HhuCaH2T/I+n/JRSqEMKAQ+KA38qi\nnjj14UmUCaAvtxjU/d0YUdR2HLUAjkW0UsMv6RnKKCGwn1bFs2rUJPt+pNVTZsQ3\n3lab7rPODBxJyWVczD4su9cVGrGAnPFe8eIsolLDfVQ4e/VACtP0jbdRoQKBgQCH\n+ENq4UUtP2eo7qtwe4nJ1MXD0rOFro6cUUbg52/lgX09S7IEqJ9bgg43MdGbhFcV\nzzUrHOQZ5ceslWNrzGOVOZkIJMuv5JJbSvkSsHZuHrSvXk27UutgcxIkbqyZok1k\nBgOKZ//aOUFwiGk6rt6hKC5obeXkAp99GY9i3ZTNiQKBgDtgwpnZv2GPQtggvvlX\n41Ubgx0101+UGyS+glF3LbAdHzC7wMpJ5heSUqSM1k9A3BvfJ/9l3EDUIWqy83RX\naZBspTcKNK/XagQgFgdlZ2Z7BRsGKVrf1G0B7DbyM9icDX6LTmbYRWLTBaJIYTLa\nN26qKIr7tBKT42Lbf6/V2OVm\n-----END PRIVATE KEY-----\n",
  "client_email": "telemed@telemedfhir.iam.gserviceaccount.com",
  "client_id": "107949582822888757049",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/telemed%40telemedfhir.iam.gserviceaccount.com"
}

createResource()