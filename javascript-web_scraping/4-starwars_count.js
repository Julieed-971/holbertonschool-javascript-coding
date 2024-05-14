#!/usr/bin/node
/* Script that prints the number of movies where the character “Wedge Antilles” is present */
const request = require('request');
// get the url to request
const url = process.argv[2];

// calling the request get method
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  // parse response body as JSON
  const movieData = JSON.parse(body);
  let count = 0;
  // iterate over each movie object
  for (const movie of movieData.results) {
    // iterate over the "characters" array of current movie
    for (const characterUrl of movie.characters) {
      // check if characters array contains characterUrl
      if (characterUrl.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
