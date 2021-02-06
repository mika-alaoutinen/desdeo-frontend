# DESDEO frontend

## Setup
Run application locally either traditionally with npm or with Docker Compose.

### Option 1: npm
```
npm i && npm start
```

### Option 2: Docker Compose
```
docker-compose up
```

## Available Scripts

In the project directory, you can run:

### 1. Build scripts

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```
npm run build
```

### 2. Eject scripts

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
```
npm run eject
```

### 3. Linting

Runs linter and fixes linting errors.
```
npm run lint
```

### 4. Running the application for local development

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.
```
npm start
```

### 5. Test scripts

Runs all tests. Currently, the application has only unit tests, however end-to-end tests should also be run with this command.
```
npm test
```

Produces a test coverage report.
```
npm test:coverage
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```
npm test:unit
```


## TODO
- [ ] Figure out how to test components that use Redux store.