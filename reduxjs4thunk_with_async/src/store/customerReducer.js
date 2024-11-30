/*
Пример декомпозиции

Каждый редюсер помезен в отделбнюу папку с index.js файлом

*/



//начальное значение
const defaultState = {

    //state value is array now
    customers: []

  }


//хорошая практика для свитчей сохранять кейсы в константы
//при возникновении ошибки удобно дебажить
const ADD_CUSTOMER ="ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

//как происходит изменение состояния через стейт
export const customerReducer = (state = defaultState, action) => {
    switch (action.type){   
      case ADD_MANY_CUSTOMERS:
    
        // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
        // 2:09
        // спред старого массива и добавление нового свойства
        //old state spread и перезапись старого массива на новый через спред с добавлением нового массива с сервера: action.payload 
        return {...state, customers: [ ...state.customers, ...action.payload ] 
           }

      case ADD_CUSTOMER:
        // изначально в редаксе состяние является неизменяемым
        // то есть каждый раз нужно возвращать новый обект
        // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
        // 2:09
        // спред старого массива и добавление нового свойства
        //old state spread и перезапись старого массива на новый через спред с добавлением нового элемента: action.payload 
        return {...state, customers: [ ...state.customers, action.payload ] 
           }
  
      case REMOVE_CUSTOMER:
        // strict comparison of names in the array: el.name
        return {...state, customers:  state.customers.filter(el => el.name !== action.payload) 
        }
  
      default:
        return state
    }
  }
  

  /*рефакторинг:
      Для подачи в функцию dispatch
  */
  
  /*
  export const addCustomerActionCreator =(payload)=>{{type: ADD_CUSTOMER, payload}}
 
  ESLint did not see the implicit return in one line, so had to
  return explicitly

  */

  export const addCustomerActionCreator =(payload)=>{
    return {type: ADD_CUSTOMER, payload}
  }

  export const deleteCustomerActionCreator =(payload)=>{
    return {type: REMOVE_CUSTOMER, payload}
  }


  //to work with incoming JSON from server
  export const addManyCustomersActionCreator =(payload)=>{
    return {type: ADD_MANY_CUSTOMERS, payload}
  }
