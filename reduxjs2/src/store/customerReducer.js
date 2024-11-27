/*
Пример декомпозиции

Каждый редюсер помезен в отделбнюу папку с index.js файлом

*/



//начальное значение
const defaultState = {

    //state value is array now
    customer: []

  }
  


export const customerReducer = (state = defaultState, action) => {
    switch (action.type){   
      case "ADD_CUSTOMER":
        // изначально в редаксе состяние является неизменяемым
        // то есть каждый раз нужно возвращать новый обект
        // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
        // 3:27 
        return {...state, cash: 
          //old state cash + new value, that came with action
          state.cash + action.payload }
  
      case "GET_CUSTOMERS":
        return {...state, cash: 
          //old state cash - new value, that came with action
          state.cash - action.payload }
  
      default:
        return state
    }
  }
  