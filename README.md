# Mayoral Technical Test

Fetchs data from a static json in public (development) and build (production) folders.

Requires [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

## How to start

Cloning from GitHub:

```
git clone git@github.com:rafaelalma/mayoral-test.git
cd mayoral-test
npm install
npm start
```

From a GitHub downloaded .zip:

1. Extract from mayoral-test-main.zip
2. Navigate to mayoral-test-main and run

```
npm install
npm start
```

## How to build

```
npm run build
npx serve -s build
```

## Info

Tested with `Node.js v16.13.0 LTS` and `npm version 8.1.4`

Tested in `Mozilla Firefox v94.0` for Ubuntu (development and production builds)

### Installed packages

[React Router v6](https://reactrouter.com/)

[Serve](https://www.npmjs.com/package/serve)

### Create React App

Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.\

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
