const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const app = express();

// Added accountSID + authToken fron Twilio Console
const accountSid = undefined;
const authToken = undefined;
const client = require('twilio')(accountSid, authToken);


// Daily Pull of Team from supabase
// grab initial time to text and follow-up text time
// @ intial time send 'Whos gaming?' save true responses to an isGaming array w/ time state.
// @ follow-up time send Number of Gamers @ average time
const teamNumbers = ['+14192332482', '+15677128845'];

// teamNumbers.forEach(number => {
    
// });
client.messages
    .create({
       body: 'Are you gaming tonight? Please respond. (Example format: "yes @ 8:00PM" or simply "no".)',
       from: '+15139956742',
       to: teamNumbers[0],
     })
    .then(message => console.log(message.sid));
  
  app.use(bodyParser.urlencoded({ extended: false }));
  
  app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    if (req.body.Body == 'Yes') {
      twiml.message('Awesome, at 6PM EST we will confirm how many gamers will be joining you.');
    } else if (req.body.Body == 'No') {
      twiml.message('No worries, Have a great night!');
    } else {
      twiml.message(
        'No Body param match, Twilio sends this in the request to your server.'
      );
    }
  
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });
  
  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });


/*
1. Team Leader creates an account on WhosGaming.app
    * Creates Team with inputs of : *
        - Group Name
        - intital text time
        - follow-up text time
        -team phone numbers
2. 


*/