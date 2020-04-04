const OT = require('@opentok/client');

// Set Credentials
const apiKey = '46643022';
const sessionId = '2_MX40NjY0MzAyMn5-MTU4NTk4MjY5NjE3Mn56d0d2YWxtdkRqK0xkVmJRdWdNSmJQSVR-fg';
const token = 'T1==cGFydG5lcl9pZD00NjY0MzAyMiZzaWc9MzBkOWI1ZjBmMTFiZjMyNjIyYTAwYzQ2M2FkOTU3MjA2NzU1ZDA4OTpzZXNzaW9uX2lkPTJfTVg0ME5qWTBNekF5TW41LU1UVTROVGs0TWpZNU5qRTNNbjU2ZDBkMllXeHRka1JxSzB4a1ZtSlJkV2ROU21KUVNWUi1mZyZjcmVhdGVfdGltZT0xNTg1OTgyOTY1Jm5vbmNlPTAuNzk2MTk3NTY5NjExMTc1MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTg4NTc0OTY0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
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