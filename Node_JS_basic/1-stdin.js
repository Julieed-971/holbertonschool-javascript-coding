// Set the encoding for the stdin stream to UTF-8
process.stdin.setEncoding('utf-8');

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for data from the standard input (stdin) once
process.stdin.once('data', (data) => {
  // Convert the input data to a string and remove any leading/trailing whitespace
  const input = data.trim();

  // Log the input data to the console
  console.log(`Your name is: ${input}`);

  // Notify the user that the software is closing
  console.log('This important software is now closing');

  // Exit the process
  process.exit(0);
});

// Resume the stdin stream to start receiving data
process.stdin.resume();
