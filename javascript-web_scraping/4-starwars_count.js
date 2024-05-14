#!/usr/bin/node
const request = require('request');
const characterUrl = "https://swapi-api.hbtn.io/api/people/18/";

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
      // Check if characters array contains characterUrl
      if (movie.characters.includes(characterUrl)) {
        count++;
      }
    });
    console.log(count);
  }
});
