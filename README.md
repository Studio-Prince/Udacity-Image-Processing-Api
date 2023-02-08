OJECT SPECIFICATION
Image Processing API

Setup and Architecture

CRITERIA
MEETS SPECIFICATIONS
Set up a project structure that promotes scalability

Source code is kept separate from compiled code.
All tests should be contained in their own folder.
Separate modules are created for any processing.
Set up an npm project

Package.json should contain both devDependencies, and dependencies.
Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
Build script should run without error.
Functionality





Feel free to attempt to create this project based on the overview and rubric specifications. If you get stuck or prefer structured guidance -- here is a walkthrough to get you up and running!

Initialize your project. Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier. Complete your package.json file.
Where should your dependencies be placed?
What scripts should you create to take advantage of the dependencies you've added?
Are there other dependencies you would like to add or know you will need to improve your workflow?
Set up your project structure. Create folders and files for what you anticipate you will need for the project.
How do you plan to keep your source code and build code separately?
Where will you keep your tests?
How do you plan to name your routes? Utilities?
Configure your middleware and dependencies. You have quite a few dependencies that all need to work together. Sometimes it's easiest to write some simple js functions to test that all of your dependencies work together before you begin adding any functionality.
Does your TypeScript compile?
Do your Eslint and Prettier scripts work?
Are you able to write and pass a basic unit test?
Set up your server and create an API endpoint. Even though this application is fairly straightforward, you still want to set it up in a scalable way. How can you set up your server and route so that your project remains scalable? Only one endpoint is required. It's best to create this and test that it is working before you move on.
Install Sharp and configure endpoint. Documentation for Sharp can be found here. It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.
Pay close attention to if you need to use asynchronous code or not. If you do, make sure you stay consistent throughout your application.
There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about what type the Sharp constructor would return. Have a look at the complete documentation and the examples it provides.
Write your tests. If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.
Add caching. Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.
Test, Debug, and Refactor. Think of edge-cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make certain that your user isn't left in the dark when something goes wrong.
Do all of your tests still pass?
Does stopping and restarting your server cause any issues?
Does your user get feedback when something goes wrong?
Is your code easy to follow? Comments?
Is your API production-ready?
Build, Document, and Submit. If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. If everything works and your documentation is complete, you're ready to submit! Congratulations!
Version Control
Although not a requirement, we recommend using Git from the very beginning if you choose to build on your local environment or use the provided workspace. Make sure to commit often and to use well-formatted commit messages that conform to our Git Style Guide.

Git is installed within the workspace. Using git and pushing to a repository is the best way to back up and get a copy of your work.
CRITERIA
MEETS SPECIFICATIONS
Add and use Express to a node.js project

Start script should run without error
Provided endpoint should open in the browser with status 200
Folow middleware documentation to use middleware to create an API

Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.
An error message should be provided to the user when an image has failed to process or does not exist.
Code Quality

CRITERIA
MEETS SPECIFICATIONS
Write relevant unit tests with Jasmine and SuperTest to improve code quality and refactoring

Test script runs and all tests created pass.
There is at least 1 test per endpoint and at least one test for image processing.
Utilize TypeScript to avoid errors and improve maintainability

All code in the SRC folder should use the .ts filetype.
Functions should include typed parameters and return types and not use the any type.
Import and Export used for modules.
Build script should successfully compile TS to JS.
Write well-formatted linted code

Prettier and Lint scripts should run without producing any error messages.


Image Processing API

Setup and Architecture

CRITERIA
MEETS SPECIFICATIONS
Set up a project structure that promotes scalability

Source code is kept separate from compiled code.
All tests should be contained in their own folder.
Separate modules are created for any processing.
Set up an npm project

Package.json should contain both devDependencies, and dependencies.
Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
Build script should run without error.
Functionality

CRITERIA
MEETS SPECIFICATIONS
Add and use Express to a node.js project

Start script should run without error
Provided endpoint should open in the browser with status 200
Folow middleware documentation to use middleware to create an API

Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.
An error message should be provided to the user when an image has failed to process or does not exist.
Code Quality

CRITERIA
MEETS SPECIFICATIONS
Write relevant unit tests with Jasmine and SuperTest to improve code quality and refactoring

Test script runs and all tests created pass.
There is at least 1 test per endpoint and at least one test for image processing.
Utilize TypeScript to avoid errors and improve maintainability

All code in the SRC folder should use the .ts filetype.
Functions should include typed parameters and return types and not use the any type.
Import and Export used for modules.
Build script should successfully compile TS to JS.
Write well-formatted linted code

Prettier and Lint scripts should run without producing any error messages.


