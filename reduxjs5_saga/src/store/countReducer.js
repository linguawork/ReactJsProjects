
//value is integer
const defaultState = {
    count: 0

  }
  
export const INCREMENT = "INCREMENT"

/*
Why Does This Work Without Handling ASYNC_INCREMENT in the Reducer?

The reducer doesn't need to handle ASYNC_INCREMENT because that action is only used to trigger the asynchronous process in Redux Saga. The actual state update happens when the INCREMENT action is dispatched from the worker saga. That's why your reducer only needs to handle the INCREMENT and DECREMENT actions, not ASYNC_INCREMENT.
Summary:

    The ASYNC_INCREMENT action is handled by Redux Saga, not the reducer.
    The reducer only needs to handle the INCREMENT (and DECREMENT) actions that result from the Saga.
    ASYNC_INCREMENT is just a trigger for the Saga to perform an asynchronous action, and the actual state change (count increment) happens when the INCREMENT action is dispatched.
*/
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"

export const DECREMENT = "DECREMENT"

//export default can be used only if it is the only variable to export
export const countReducer = (state = defaultState, action) => {
    switch (action.type){   
      case INCREMENT:
        // изначально в редаксе состяние является неизменяемым
        // то есть каждый раз нужно возвращать новый обект
        // создаем обект на основе спреда старого и изменяем конкретное поле (их может быть несколько)
        // 3:27 
        return {...state, count: 
          //old state cash + new value, that came with action
          state.count + 1 }
  
      case DECREMENT:
        return {...state, count: 
          //old state cash - new value, that came with action
          state.count - 1 }

      default:
        return state
    }
  }


  export const incrementCreator = () => ({type:INCREMENT})
  export const asyncIncrementCreator = () => ({type:ASYNC_INCREMENT})

  export const decrementCreator = () => ({type:DECREMENT})
  