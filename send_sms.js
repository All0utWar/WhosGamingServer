// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACe1a4722f1056732168a792f72d979b7a';
const authToken = '5e38f225a5c33db33b6dbb3128e45ba9';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15139956742',
     to: '+14192332482'
   })
  .then(message => console.log(message.sid));