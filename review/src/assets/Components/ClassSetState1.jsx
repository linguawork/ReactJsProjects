
/*
    https://react.dev/reference/react/Component
    Component is the base class for the React components 
    defined as JavaScript classes. 
    Class components are still supported by React,
    but we don’t recommend using them in new code.
*/

import { Component } from "react"

class SetState1 extends Component{
    constructor(){
        //this is to inherit from a parent class, without it the class will not work
        super() 
        this.state={
            firstName: 'Peter', 
            lastName: 'Parker'
        }

    }

    handleNameChange = () => {
        this.state=
        //setState method is used to change the state using class approach
        this.setState({
            firstName: 'Michael', 
            lastName: 'Jackson'
        }, ()=> {
            console.log(this.state)
        })
    }

    render(){
        
        return (
            <div className="state-container">
            <p> Approach 2: Updating multiple attributes.
                This is a class component: setState1 
                that changes the object with user's name and surname
                <a href="https://www.geeksforgeeks.org/reactjs-setstate/" target="blank"> Source info</a>
                </p>
                <h1 className="my-component">Hello {this.state.firstName} {this.state.lastName}</h1>
                <button onClick={()=>this.handleNameChange()} > Change Name</button>

            </div>
            )
    }
    /*
    
    I want to ask, if curly brackets are used to include functions and variables? As in :       
        <>
            <h1>Hello {this.state.firstName} {this.state.lastName}</h1>

            <button onClick={()=>this.handleNameChange()}> Change Name</button>
        </>

ChatGPT
    Yes, you are correct! In JSX, curly braces {} are used to include JavaScript expressions, 
    functions, and variables within the markup. This allows you to dynamically render 
    content based on the values of variables or the result of function calls.

    In your example:

    jsx
        <>
            <h1>Hello {this.state.firstName} {this.state.lastName}</h1>
            <button onClick={() => this.handleNameChange()}>Change Name</button>
        </>
    {this.state.firstName} and {this.state.lastName} are expressions that evaluate to the 
    firstName and lastName properties of the component's state, respectively. These values 
    will be inserted into the rendered output.

    {() => this.handleNameChange()} is an arrow function used as an event handler for the 
    onClick event of the button. It will call the handleNameChange method when the button 
    is clicked.

    Using curly braces {} in JSX allows you to seamlessly integrate JavaScript logic into 
    your React components, making them dynamic and interactive.

    */
}

//had a problem with closing tag <button/>
export default SetState1



