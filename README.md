# Tic-Tac-Toe

This is a simple web application that lets the user(s) play a game of tic-tac-toe. This project was developed in Ubuntu using Windows Subsystem for Linux (node v16.8.0 and npm 7.22.0).

## Technologies Used:

- Next.js
- TypeScript
- TailwindCSS

## How to install:

1. Clone the repository using `git clone https://github.com/jfvalerio/tictactoe.git`
2. Go to the directory using `cd tictactoe`
3. Install the node modules using `npm install`

## How to run the program:

1. First, make sure that the back-end server is running (https://github.com/jfvalerio/tictactoe-server)
2. If you want to skip the server, you can check components/Boards.tsx and use the block of code for the optional Next.js back-end functionality
3. Build the program using `npm run build`
4. Run the program using `npm run start`
5. If in development, skip the building and run the program using `npm run dev`
6. Visit http://localhost:3000 to view the application

## Project Structure:

- /components - Reusable pieces of code that could be added to the pages.
- /pages - The pages in the website. Automatic routing: index.tsx = /.
- /pages/api - An optional back-end for Next.js. A separate Node.js server is not needed for simple REST API Requests.
- /public - Directory for image files and icons

## Notes:

There is a lot of room for improvement and additional features that could be added to this application. Things like an undo button, customizable player names, scoring system, and overall improvement in UI design. However, I think that a simple solution that accomplishes the tasks specified is best for tasks with short deadlines. If the users still find this lacking, I am very willing to add improvements in the future.
