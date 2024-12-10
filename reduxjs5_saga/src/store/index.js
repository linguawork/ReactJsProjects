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




import {createStore, combineReducers, applyMiddleware} from 'redux';


//import inside local index.js the reducer
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';


//saga 3d step for redux-saga
import createSagaMiddleware from 'redux-saga';
//6 Watcher should be passed to sagaMiddleWare
import { countWatcher } from '../saga/countSaga';

//call the function and save it to a variable
const sagaMiddleWare = createSagaMiddleware()





/*
    Чтобы импортировать больше 1 редьюсера нужна функция из редакс 
    combine Reducers, which is also imported from redux
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
    countReducer, 
    userReducer  
})


/*
первый параметр - это редьюсер (это простая функция)
подаем сюда редюсер из компонента и экспортируем store чтобы подать его в основной индекс
the second parameter can be Middleware or devtools
*/

//4 add applyMiddleware to createStore and inside pass the sagaMiddleWare function 
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

//5 need to run sagaMiddleWare.run() and inside pass a Watcher function
sagaMiddleWare.run(countWatcher)


