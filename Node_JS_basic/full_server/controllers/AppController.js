// Create a class named AppController to handle application routes.
class AppController {
  // Define a static method getHomepage to handle GET requests to the homepage.
  static getHomepage(request, response) {
    // Use the 'response' object's 'status' method to set the HTTP status code to 200 (OK).
    // Use the 'send' method to send a response body with the message 'Hello Holberton School!'.
    return response.status(200).send('Hello Holberton School!');
  }
}
// Export the AppController class as a default export,
// so it can be imported using 'import AppController from './AppController.js'' in other modules.
export default AppController;
