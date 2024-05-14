#!/usr/bin/node
// import request module
const request = require('request');

// get the URL to process data from
const url = process.argv[2];

// make a get request to the provided urel
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  // parse the json string into an object
  const todosData = JSON.parse(body);
  const completedTasks = {};

  // iterate through the data
  for (const task of todosData) {
    // get the userId
    const userId = task.userId;
    // get the boolean value of the task completion status
    const isCompleted = task.completed;

    // initialize the object for the current userId
    if (!completedTasks[userId]) {
      completedTasks[userId] = 0;
    }

    // if completed is true, increment the number of completed task
    if (isCompleted === true) {
      completedTasks[userId]++;
    }
  }

  // print the results
  console.log(completedTasks);
});
