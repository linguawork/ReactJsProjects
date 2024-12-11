import React, { useState } from "react"
/*
    https://www.youtube.com/watch?v=O6P86uwfdR0
    Learn useState In 15 Minutes - React Hooks Explained

    Kyle explains
 */



function UseStateHookMulti(){

    /*useState( arg:
        if you have more than one value to update (compare with Obj)
        use multi useState hooks

        one property per one Hook
        
    */
    const [currentCount, setCount] = useState(1)
    const [currentTheme, setTheme] = useState('blue')



    function decrementCount(){
        // though it is a function we dont use {}
        // we immediately pass value inside the brackets ()
        // setState(currentState - 1) this is not a safe way, we need to use arrow func
        setCount(
            prevValue => prevValue - 1
        )
        setTheme('red') //this is update color when we decrement

    }


    function incrementCount(){
        setCount(
            prevValue => prevValue + 1
        )
    }


    //do not forget the round brackets when you returnI()
    //in {this is JSX template}
    return(
        <div className="state-container">
            <p>This is the video by Kyle: multi useState</p>
            <a href="https://www.youtube.com/watch?v=O6P86uwfdR0" target="blank">Source video</a>
            <button onClick={decrementCount}>-</button>
            <span>{currentCount}</span>
            <span>{currentTheme}</span>
            <button  onClick={incrementCount} >+</button>
        </div>
    )
}

export default UseStateHookMulti

