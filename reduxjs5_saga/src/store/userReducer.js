//начальное значение
const defaultState = {
    users: []
  }


//хорошая практика для свитчей сохранять кейсы в константы
//при возникновении ошибки удобно дебажить
export const SET_USERS ="SET_USERS"


//как происходит изменение состояния через стейт
export default userReducer = (state = defaultState, action) => {
  switch (action.type){   
      case SET_USERS:
        return { ...state, users: action.payload }
    }
    return state
}
  
export const setUsers =(payload)=>({type: ADD_CUSTOMER, payload})

