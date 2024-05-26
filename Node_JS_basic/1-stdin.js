// Set the encoding for the stdin stream to UTF-8
process.stdin.setEncoding('utf-8');

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for data from the standard input (stdin) on
process.stdin.on('readable', () => {
  const input = process.stdin.read();

  // Check if input is not null
  if (input !== null) {
    // Write the name in the standard output
    process.stdout.write(`Your name is: ${input}`);
  }
  // Notify the user that the software is closing
  process.stdout.write('This important software is now closing\n');

  // Exit the process
  process.exit(0);
});
