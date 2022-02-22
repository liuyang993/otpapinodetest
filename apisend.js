
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://otpapi.worldhubcom.com/api/mcotp/send',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic M2lwY3VuZnY5bGJhOjB5OWp5d3FpZXBkOQ=='
  },
  body: JSON.stringify({
    "to": "62967888000",
    "length": 6,
    "tag": "compaign1",
    "timeout": 300,
    "notifyurl": ""
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


