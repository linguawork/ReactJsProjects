import React, { useState } from "react"
/*
    https://www.youtube.com/watch?v=O6P86uwfdR0
    Learn useState In 15 Minutes - React Hooks Explained

    Kyle explains at 10:39 the different behavior 
    of arrow and named functions
*/

function repeating(){
    console.log('repeat many times')
         //the function should return
    return 4
}

//use PascalCase for functional component names
function UseStateHookArrow(){

    /*useState( 

            an arrow function may be used that will render only ONCE,
            a named function is passed, then it will be re-rendered more than ONCE ), 
        can be used several times but with different values

        And this is why it happens like this:
        GPT:
        When you use an arrow function directly 
            as an argument to useState, you're passing the entire function definition,
            which will be executed internally by React when it needs to compute the initial state. 
        
        On the other hand, when you pass a named function, 
            you're passing a reference to the function itself, 
            which will be immediately invoked during each render. 
            
        This difference in behavior can have implications 
        for when and how the function is executed, as you observed.

        CHOOSE THE FUNCTION YOU NEED FOR YOUR PROGRAM LOGICS
    */

    /*
        this will render only once at the start and no more
        even when you increment or decrement 
    */
        const [currentState, setState] = useState(
            ()=>{
                console.log(
                    
                    'File: UseStateHookArrow: this will render two times, it is normal, initial render and subsequent render'
                )
                //the function should return
                return 3
            }
        )

    /*
        The named function will re-render everytime I increase or decrease
    */
        // const [currentState, setState] = useState(repeating())




    function decrementCount(){
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
            <p>video by Kyle: explanation of useState(arrow Vs named function)</p>
            <a href="https://www.youtube.com/watch?v=O6P86uwfdR0" target="blank">Source video</a>
            <button onClick={decrementCount}>-</button>
            
            <span>{currentState}</span>

            <button  onClick={incrementCount} >+</button>
        </div>
    )
}

export default UseStateHookArrow

