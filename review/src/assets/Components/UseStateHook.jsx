import React, { useState } from "react"
/*
    https://www.youtube.com/watch?v=O6P86uwfdR0
    Learn useState In 15 Minutes - React Hooks Explained

    Kyle explains
 */



function UseStateHook(){

    /*useState( arg:
        default state value like 4, 
        an arrow function may be used that will render only ONCE,
        a named function is passed, then it will be re-rendered more than ONCE ), 
    can be used several times but with different values
        object:{}, be sure to return the spread of the object to keep all the values, watch the vidoe
    */
    const [currentState, setState] = useState(0)
    // const [currentState, setState] = useState(0) 



    function decrementCount(){
        // though it is a function we dont use {}
        // we immediately pass value inside the brackets ()
        // setState(currentState - 1) this is not a safe way, we need to use arrow func
        setState(
            prevValue => prevValue - 1
        )

    }


    function incrementCount(){
        setState(
            prevValue => prevValue + 1
        )
    }


    //do not forget the round brackets when you returnI()
    //in {this is JSX template}
    return(
        <div className="state-container">
            <p>This is the video by Kyle: useState</p>
            <a href="https://www.youtube.com/watch?v=O6P86uwfdR0" target="blank">Source video</a>
            <button onClick={decrementCount}>-</button>
            <span>{currentState}</span>
            <button  onClick={incrementCount} >+</button>
        </div>
    )
}

export default UseStateHook

