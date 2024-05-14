#!/usr/bin/node
// import filesystem module
const fs = require('fs');

// import request module
const request = require('request');

// get the URL to copy text from
const textToCopyUrl = process.argv[2];

// get the filename to copy the text to
const fileName = process.argv[3];

// make a get request to the provided url 
request.get(textToCopyUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  // write the text from the URL to the specified file
  fs.writeFile(fileName, body, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
});
