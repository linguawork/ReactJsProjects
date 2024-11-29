/*
Пример декомпозиции

Каждый редюсер помезен в отделбнюу папку с index.js файлом

*/



//value is integer
const defaultState = {
    cash: 0

  }
  


export const cashReducer = (state = defaultState, action) => {
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
  