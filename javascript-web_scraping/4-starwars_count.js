#!/usr/bin/node
const request = require('request');

// get the url to request
const url = process.argv[2];

// calling the request get method
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // parse response body as JSON
  const movieData = JSON.parse(body);

  // check if the response contains a 'results' array
  if (Array.isArray(movieData.results)) {
    let count = 0;

    // iterate over each movie object
    for (const movie of movieData.results) {

      // iterate over the "characters" array of current movie
      for (const characterUrl of movie.characters) {

        // check if characters array contains characterUrl
        if (characterUrl.includes('18')) {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
});
