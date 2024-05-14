#!/usr/bin/node
const request = require('request');

// get the url to request
const url = process.argv[2];

// calling the request get method
request.get(url, function (error, response) {
  if (error) {
    console.error(error);
  }
  console.log('code:', response.statusCode);
});
