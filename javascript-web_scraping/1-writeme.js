#!/usr/bin/node
const fs = require('fs');

// get the file path
const filename = process.argv[2];

// get the content to write in the file
let dataToWrite = process.argv[3];

// open and read the content of the file
fs.writeFile(filename, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
