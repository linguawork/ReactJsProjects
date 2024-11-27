import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//what is imported from redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';



//createStore is deprecated, but still is worth learning
//https://redux.js.org/api/createstore

//3 метода для работы с состоянием
//methods to get state
//to change state with the help of dispatch
//подписаться на изменение состояния



/*принимает 2 парам: state, action
action = {
type:"", 
payload:"" 
}
возврашаут состояние

payload = это данные для передачи


обычно логика зависит от типа действия, возникает необходимость в switch

const reducer = () => {
}


state can be object, array, primitive data type
Pretty often it is object

inside which the key can have either array, primitive values, objects as value

const defaultState = {
  cash: 0, 
}


*/

const defaultState = {
  cash: 5

}



const reducer = (state = defaultState, action) => {
  switch (action.type){
    
    case "ADD_CASH":
      // изначально в редаксе состяние является неизменяемым
      // то есть каждый раз нужно возвращать новый обект
      // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
      // 3:27 
      return {...state, cash: 
        //old state cash + new value, that came with action
        state.cash + action.payload }

    case "GET_CASH":
      return {...state, cash: 
        //old state cash - new value, that came with action
        state.cash - action.payload }

    default:
      return state

  }


}



//первый параметр - это редьюсер (это простая функция)
const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//компонент провайдер из react-redux
//параметром он принимает store
<Provider store={store}> 
    <App />
</Provider>


);

