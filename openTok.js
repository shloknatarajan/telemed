const OT = require('@opentok/client');

// Set Credentials
const apiKey = '46643022';
const sessionId = '1_MX40NjY0MzAyMn5-MTU4NTg3MjE4OTIzNX4zWlUwRnFzZjR6Z1BMNUJadzMwRVpzNUh-fg';
const token = 'T1==cGFydG5lcl9pZD00NjY0MzAyMiZzaWc9M2IyMmZjYmI4OGI2NjAzODE1OWY5ZTIzZDk0MDQ3Y2JlNzk2MzkwNjpzZXNzaW9uX2lkPTFfTVg0ME5qWTBNekF5TW41LU1UVTROVGczTWpFNE9USXpOWDR6V2xVd1JuRnpaalI2WjFCTU5VSmFkek13UlZwek5VaC1mZyZjcmVhdGVfdGltZT0xNTg1ODcyMTg5JnJvbGU9bW9kZXJhdG9yJm5vbmNlPTE1ODU4NzIxODkuMjQ4NDE3MzA5Mzc4NTA=';

if (!apiKey || !sessionId || !token) {
  alert('You need to add your apiKey, sessionId and token to openTok.js');
}

// Initialize Session
const session = OT.initSession(apiKey, sessionId);

// Set session event listeners
session.on({
  streamCreated: (event) => {
    session.subscribe(event.stream, 'subscriber', (error) => {
      if (error) {
        console.error(`There was an issue subscribing to the stream: ${error}`);
      }
    });
  },
  streamDestroyed: (event) => {
    console.log(`Stream with name ${event.stream.name} ended because of reason: ${event.reason}`);
  }
});

// Create a publisher
const publisher = OT.initPublisher('publisher', (initError) => {
  if (initError) {
    console.error(`There was an error initializing the publisher: ${initError}`);
  }
});

// Connect to the session
session.connect(token, (error) => {
  // If the connection is successful, initialize a publisher and publish to the session
  if (error) {
    console.error(`There was an error connecting to session: ${error}`);
    publisher.destroy();
    return;
  }
  session.publish(publisher, (pubError) => {
    if (pubError) {
      console.error(`There was an error when trying to publish: ${pubError}`);
    }
  });
});