# Getting Started with Create React App

To create a react project in JS:
```
npx create-react-app 
```

cd to folder and install redux, react-redux (this is to bind the state of redux with the components)

```
npm i redux react-redux redux-devtools-extension --legacy-peer-deps
```
In the above command:
1 The devtools are installed with:
npm i redux-devtools-extension

the flag may help with deprecated dependencies:
```
--legacy-peer-deps
```

2 import 
import { composeWithDevTools } from 'redux-devtools-extension'

add as the second param:
export const store = createStore(rootReducer, composeWithDevTools())


3 Add extension redux DevTools for Chrome or Mozilla Firefox
(On browser, f12 to check redux state)



## This is the continuation of REDUXJS2 project
I copied the files from the reduxjs2 project folder 
to extend the project here

In the project two reducer functions are used. The project is decomposed into components. 
Each reducer has its own file inside a common component folder: store. The store folder has its own index.js file to contain store, which is exported to the Provider inside main index.js file. 


export const store = createStore(rootReducer)

The createStore() accepts a reducer function as a parameter.
The store is exported to the main index.js file.

The second parameter can be Middleware or devtools.1
The devtools are installed with the command from 
https://www.npmjs.com/package/@redux-devtools/extension:



## REDUXJS3
The state will use array of data.

