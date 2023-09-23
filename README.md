# Message Board 

This is a simple message board application built using Express.js and MongoDB with the Pug templating engine for the views.

- [Live Demo](#)

## Description

The Mini Message Board is a basic web application that allows users to post and view messages. Users can access the main message board ("/") to see existing messages and submit their own messages via the new message form ("/new"). Messages are displayed with the user's name, message text, and the date they were added.

## Project Setup

1. **Project Initialization**: To set up the project, I used [express-generator](https://expressjs.com/en/starter/generator.html) to create a basic project structure. You can also set it up manually.

2. **Git Repository**: I initialized a Git repository in the project directory to track changes.

   ```bash
   git init
   ```

3. **Git Ignore**: I created a `.gitignore` file to exclude the `node_modules` directory from version control.

   ```
   node_modules/
   ```

## Approach

### MVC Architecture

I followed the Model-View-Controller (MVC) architecture to structure the project:

- **Models**: In this project, I used MongoDB with Mongoose as the Object Data Modeling (ODM) library to define the data model for messages.

- **Views**: I used the Pug templating engine for rendering views. The main view is the index view, which displays messages from the database. There's also a form view for adding new messages.

- **Controllers/Routes**: The Express.js routes handle user interactions and connect the views with the database. I created two routes:
  - `GET /`: Renders the index view and displays existing messages.
  - `GET /new`: Renders the form view for adding new messages.
  - `POST /new`: Handles form submissions, adds new messages to the database, and redirects users to the index page.

## Challenges Faced

- **MongoDB Integration**: Integrating MongoDB and Mongoose to handle data storage and retrieval was a significant learning curve.

- **Routing**: Setting up routes to handle different HTTP methods (GET and POST) and managing data flow between the views and the database required careful planning.

- **Templating**: Learning and using the Pug templating engine to render dynamic HTML views was a challenge initially, but it provided a clean and efficient way to generate HTML.

## Future Enhancements

Here are some possible improvements for the Mini Message Board project:

- **User Authentication**: Implement user authentication to allow users to have personalized profiles and manage their own messages.

- **Message Deletion**: Add the ability to delete messages.

- **Pagination**: Implement pagination for the message board to handle a large number of messages efficiently.

- **Validation**: Implement input validation to ensure data integrity.

## How to Run the Project Locally

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Install the project dependencies.

   ```bash
   npm install
   ```

3. Set up a MongoDB database and update the database configuration in the project.

4. Start the server.

   ```bash
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## License

This project is open-source and available under the [MIT License](LICENSE).