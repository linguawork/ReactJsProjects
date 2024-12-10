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




import {createStore, combineReducers} from 'redux';


//import inside local index.js the reducer
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';


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
    countReducer, 
    userReducer  
})


/*
первый параметр - это редьюсер (это простая функция)
подаем сюда редюсер из компонента и экспортируем store чтобы подать его в основной индекс
the second parameter can be Middleware or devtools
*/


export const store = createStore(rootReducer)


