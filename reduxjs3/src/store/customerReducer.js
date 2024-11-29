/*
Пример декомпозиции

Каждый редюсер помезен в отделбнюу папку с index.js файлом

*/



//начальное значение
const defaultState = {

    //state value is array now
    customers: []

  }
  

//как происходит изменение состояния через стейт
export const customerReducer = (state = defaultState, action) => {
    switch (action.type){   
      case "ADD_CUSTOMER":
        // изначально в редаксе состяние является неизменяемым
        // то есть каждый раз нужно возвращать новый обект
        // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
        // 2:09
        // спред старого массива и добавление нового свойства
        //old state spread и перезапись старого массива на новый через спред с добавлением нового элемента: action.payload 
        return {...state, customers: [ ...state.customers, action.payload ] 
           }
  
      case "REMOVE_CUSTOMER":
        // strict comparison of names in the array: el.name
        return {...state, customers:  state.customers.filter(el => el.name !== action.payload) 
        }
  
      default:
        return state
    }
  }
  