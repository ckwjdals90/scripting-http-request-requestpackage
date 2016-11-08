
const request = require('request');
const fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg').on('response', (response) => {

  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Message: ', response.statusMessage);
  console.log('Response Content Type: ', response.headers['content-type']);

}).pipe(fs.createWriteStream('./future.jpg'));




