#!/usr/bin/node
const fs = require('fs');

// get the file path
const filename = process.argv[2]

// open and read the content of the file
fs.readFile(filename, 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	// print the content of the file
	console.log(`${data}`);
});
