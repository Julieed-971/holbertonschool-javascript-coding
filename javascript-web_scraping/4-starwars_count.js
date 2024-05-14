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

  // Checking the response status code
  if (response.statusCode !== 200) {
    console.error(error);
    return;
  }

  // Parse response body as JSON
  const movieData = JSON.parse(body);

  // Check if the response contains a 'results' array
  if (Array.isArray(movieData.results)) {
    let count = 0;

    // Iterate over each movie object
    movieData.results.forEach(movie => {

      // Iterate over the "characters" array of current movie
      movie.characters.forEach(characterUrl => {

        // Check if characters array contains characterUrl
        if (characterUrl.includes(18)) {
          count++;
        }
      })

    });
    console.log(count);
  }
});
