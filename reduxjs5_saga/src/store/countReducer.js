
//value is integer
const defaultState = {
    cash: 0

  }
  
export const INCREMENT = "INCREMENT"
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
  export const decrementCreator = () => ({type:DECREMENT})
  