# Art gallery project

## Installation

Follow these steps for first time installation

- Install Visual Studio Code (or your IDE of choice)

- Install Git (or any git GUI of choice)

- Install nodejs \
`sudo apt-get install nodejs`\
Check by `node -v`, succeeded if returned a version number

- npm (Auto installed with nodejs)\
Check by `npm -v`, succeeded if returned a version number

- Clone this repository \
`git clone https://github.com/cer-nagas/cer-nagas.github.io.git`

- In the directory you've just created via cloning (cer-nagas.github.io/) run in terminal\
`npm i`\
 Notice a node_module/ directory will be created and filled

- Still inside the root directory (cer-nagas.github.io/), run\
`npm start`\
A tab would automatically open in your default browser. If not, you can manually open it at [http://localhost:3000](http://localhost:3000)

- Congratulations, your app is up and running (hopefully)!

## Update from my repo (upstream)

`git fetch upstream`
`git merge upstream/main`

### Troubleshooting
#### *Error: Node Sass version 5.0.0 is incompatible with ^4.0.0* 
`npm uninstall node-sass` then \
`npm install node-sass@4.14.1`\
If it complained about python, install Python by\
`sudo apt-get install python`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploys the application to [https://cer-nagas.github.io/](https://cer-nagas.github.io/)

## Disclaimer
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).