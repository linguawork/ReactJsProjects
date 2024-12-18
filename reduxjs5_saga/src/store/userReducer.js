//начальное значение
const defaultState = {
    users: []
  }


//хорошая практика для свитчей сохранять кейсы в константы
//при возникновении ошибки удобно дебажить
export const SET_USERS ="SET_USERS"
export const FETCH_USERS ="FETCH_USERS"



//как происходит изменение состояния через стейт
export const userReducer = (state = defaultState, action) => {
  switch (action.type){   
      case SET_USERS:
        return { ...state, users: action.payload }
    }
    return state
}
  
export const setUsers =(payload)=>({type: SET_USERS, payload})
export const fetchUsers =()=>({type: FETCH_USERS})


