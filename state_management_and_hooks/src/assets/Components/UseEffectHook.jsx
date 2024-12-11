import React, { useEffect, useState } from "react"

/*
    React normally will make the first render and the second one.
Me:
    I saw the app in Youtube tutorial, that guy's code also prints twice. 
    He did not explain that behavior, so I decided to ask you
ChatGPT:
    Thank you for providing additional context. It's quite common for components to 
    render twice during the initial load in React's development mode due to the reasons 
    mentioned earlier. As you've observed, even in tutorials or online resources, 
    you may encounter this behavior without explicit explanation because it's a standard behavior 
    in React's development environment.

    If you encounter the same behavior in your application and it doesn't affect the functionality 
    or performance negatively, it's generally acceptable to ignore it or briefly mention 
    it as part of the development environment's behavior.

    However, if you're concerned about the performance impact or want to understand 
    the underlying reasons in more detail, investigating the causes and optimizing your components 
    can help minimize unnecessary renders and improve the overall performance of your application.


    The hook depends upon the second argument. 
    If it changes, then it will trigger re-render
    of the hook

    If there is no change, then there is no render

*/


function UseEffectHookSideEffect(){
    /*
        useState(), we assign init value to setCurrentType method, 
        but it will be changed by pressing the buttons
    */
    const [currentState, setCurrentType] = useState('posts')

    console.log("render outside")
    //side effect will work whenever we update the second argument of the useEffect hook
    useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/${currentState}`)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error(error))
        }, 
        [currentState]

        //this code is for testing
        // () => {
        //     console.log("render inside")
        // }, []
        
)



    //do not forget the round brackets when you returnI()
    //in {this is JSX template}
    //!!!when you pass a function in JSX use arrow function 
    //to render only once, named function will re-render many times
    return(
        <div className="state-container">
            <p>Learn useEffect In 13 Minutes</p>
            <a href="https://www.youtube.com/watch?v=0ZJgIjIuY7U" target="blank">Source video</a>
            <span>{currentState}</span>
            
            <button onClick={() => setCurrentType('posts')}>POSTS</button>
            <button onClick={() => setCurrentType('users')}>USERS</button>
            <button onClick={() => setCurrentType('todos')}>TODOS</button>

        </div>
    )
}

export default UseEffectHookSideEffect

