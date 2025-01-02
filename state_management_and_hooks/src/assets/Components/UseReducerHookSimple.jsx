import React, { useReducer } from "react"


const ACTIONS = {
    INCREMENT: 'increment', 
    DECREMENT: 'decrement'
}


function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }

}



export default function UseReducerHookSimple (){

//useReducer returns array, not an object
const [state, dispatch] = useReducer(reducer, {count: 0})

console.log('Here I am')

console.log(state)
    function increment(){
        dispatch({type:'increment'})
    }

    function decrement(){
        dispatch({type:'decrement'})
    }

    return (
        <div className="state-container">
            <p>UseReducer with JS:</p>
            <a href="https://www.youtube.com/watch?v=kK_Wqx3RnHk" target="blank">Source video</a>
            <br/>
            <button onClick={ decrement} >-</button>
            <span style={{margin: '10px', fontSize: '20px'}}>{state.count}</span>
            <button onClick={ increment} >+</button>
        </div>
    )
}

