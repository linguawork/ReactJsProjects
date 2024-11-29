# Getting Started with Create React App

To create a react project in JS:
```
npx create-react-app
```

cd to folder and install redux, react-redux (this is to bind the state of redux with the components)

```
npm i redux react-redux
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is the continuation of REDUXJS project
I copied the files from the reduxjs project folder 
to extend the project here

In the project two reducer functions are used. The project is decomposed into components. 
Each reducer has its own file inside a common component folder: store. The store folder has its own index.js file to contain store, which is exported to the Provider inside main index.js file. 


export const store = createStore(rootReducer)

The createStore() accepts a reducer function as a parameter.
The store is exported to the main index.js file.

The second parameter can be Middleware or devtools.1
The devtools are installed with the command from 
https://www.npmjs.com/package/@redux-devtools/extension:
```
npm i redux-devtools-extension
```

Install in 3 steps:
1 The devtools are installed with:
npm i redux-devtools-extension

2 After installing we need import 
import { composeWithDevTools } from 'redux-devtools-extension'

add as the second param:
export const store = createStore(rootReducer, composeWithDevTools())


3 Add extension redux DevTools for Chrome or Mozilla Firefox
(On browser, f12 to check redux state)



If redux-devtools can not be installed, downgrade redux:
```
npm uninstall redux
npm install redux@^4.0.0
```

Then run one of the commands: 
```
npm install redux-devtools-extension
```
OR

```
npm install redux-devtools-extension --legacy-peer-deps
```


## The screenshot of the redux devtools extension in browser:
![alt text](<Screenshot from 2024-11-27 20-32-36.png>)


When installing dependencies for deprecated packages of redux etc
the flag may help:
```
--legacy-peer-deps
```

