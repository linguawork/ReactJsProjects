import React, { useState } from "react"
/*
    https://www.youtube.com/watch?v=O6P86uwfdR0
    Learn useState In 15 Minutes - React Hooks Explained

    Kyle explains
 */



function UseStateHookObject(){

    /*
        Kyle explains at 11:27 useState hook with object as param
        
        useState( 
            object:{}, 
            be sure to return the spread of the object to keep all the values, watch the vidoe
    */
    const [currObjState, setObjState] = useState({count: 4, theme: 'blue'})
    
    //getting the values from the object state
    const count = currObjState.count
    const theme = currObjState.theme


    /*
    There is a problem, when we increment or decrement the count value, 
    the theme disappears, it is not rendered (explained at 13:03)

    To keep the other values when rendering use spread operator ...prevValue


    BUT YOU CAN ONLY UPDATE ONE OBJECT PROPERTY PER useState Hook.
    */
    function decrementCount(){
        // though it is a function we dont use {}
        // we immediately pass value inside the brackets ()
       
        setObjState(
            prevValue =>{
                //returning the object of the prev count value only
               return { ...prevValue, count: prevValue.count - 1 }
            } 
        )

    }


    function incrementCount(){
        setObjState(
            prevValue =>{
                //returning the object of the prev count value only
        
               return { ...prevValue, count: prevValue.count + 1 }
            } 
        )
    }


    //do not forget the round brackets when you return()

    
    // <span>{count}</span>
    // <span>{theme}</span>
    // this is the values from the object passed to hook
    return(
        <div className="state-container">
            <p>This is the video by Kyle: useObjectState</p>
            <a href="https://www.youtube.com/watch?v=O6P86uwfdR0" target="blank">Source video</a>
            <button onClick={decrementCount}>-</button>

            <span>{count}</span>
            <span>{theme}</span>

            <button  onClick={incrementCount} >+</button>
        </div>
    )
}

export default UseStateHookObject

