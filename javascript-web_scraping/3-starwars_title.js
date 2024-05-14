#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];

// get the url to request
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

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

  // Find the movie title corresponding to the object ID
  const movieTitle = movieData.title;
  console.log(movieTitle);
});
