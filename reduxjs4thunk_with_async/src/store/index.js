/*
    Conclusion:

    React doesn’t mix or execute multiple index.js files because:

    It only executes the entry point file (src/index.js),
    which is connected to the index.html where the React app is 
    rendered.

    Other index.js files are simply modules that export 
    functionality and are not executed unless explicitly 
    imported into other files.

    The module system (ESM) ensures that each file 
    is treated as a separate entity, 
    and only imported code is included in the final bundle. 
    This keeps the logic separated and organized.
*/



// import thunk
import {thunk} from 'redux-thunk';
//when working with Thunk dont forget to import applyMiddleware
import {createStore, combineReducers, applyMiddleware } from 'redux';

//import inside local index.js the reducer
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
    Чтобы импортировать больше 1 редьюсера нужна функция из редакс 
    combine Reducers, wjhich is also imported from redux
    Она объектом принимает количество редюсеров

*/

/*
    можно просто функции передать:
        cashReducer, 
    customerReducer
    
    а можно ключи дописать:
      cash: cashReducer, 
    customers: customerReducer  
    

    тогда к редюсерам можно обращаться через ключи


*/
const rootReducer = combineReducers(    {
    cash: cashReducer, 
    customers: customerReducer  
})


/*
первый параметр - это редьюсер (это простая функция)
подаем сюда редюсер из компонента и экспортируем store чтобы подать его в основной индекс
the second parameter can be Middleware or devtools
Install in 3 steps:
1 The devtools are installed with:
npm i redux-devtools-extension

2 After installing we need import 
import { composeWithDevTools } from 'redux-devtools-extension'

3 Add extension redux DevTools for Chrome or Mozilla Firefox
(On browser, f12 to check redux state)
*/

//composeWithDevTools(), calling the function itself with (), not the reference

//for redux thunk put applyMiddleware() as parameter to composeWithDevTools() and inside pass thunk
// import thunk from 'redux-thunk'
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


