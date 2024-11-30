import { addManyCustomersActionCreator } from "../store/customerReducer"

/*
Суть ридакс фанк

позволяет прокинуть в сторонние функции dispatch (dispatchHook)
и мы можем им пользоваться

*/


export const fetchCustomers =()=>{
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersActionCreator(json)))
    }
}