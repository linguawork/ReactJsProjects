
/*
	returning back to setState, 
	as you said it may not update the state in the right time as 
	it has asynchronous nature. To solve this, arrow function is used to change the state.
	prevState var is passed into the function. 
	But how about changing the state of an object with many keys and values,
	can it be passed into arrow function with prevState variable  as well?

	ChatGPT
	Yes, absolutely!
	When updating the state of an object with many keys and values, 
	you can still pass a function to setState() to ensure that you're working 
	with the most up-to-date state.

	Here's an example of how you can update the state of an object 
	with multiple keys and values using a function:
*/

import { Component } from "react"

/*
	Иногда React может не вовремя возвращать результат
	изменения стейта
	для решения этого используется вариант с функцией в 
	которую подается PrevState
	как в компоненте SetState2

*/



  

class SetState4 extends Component {


	constructor(props) {
		super(props);

		// Set initial state
		// Assume we have a state object with multiple keys and values
		this.state = {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
			// Other keys...
		};
  
		// Binding this keyword
		this.updateState = this.updateState.bind(this);
	}



	updateState() {
		// Changing state
			// Updating state using a function
			this.setState((prevState) => {
				// Return a new state object based on the previous state
				return {
				// Spread the previous state to retain other keys/values
				...prevState,
				// Update specific key/value pairs as needed
				firstName: 'Jane',
				age: prevState.age + 1, // Increment age
				// Add or modify other keys as needed
				};
			});
	}

	render() {
		return (
			<div className="state-container">
                <p>
					Approach 4: Updating state values of an object with arrow function and prevState.
                    See comments in the code
                </p>
                
				<p>{this.state.firstName}</p>
				<p>{this.state.age}</p>
				{/* Set click handler */}
				<button onClick={this.updateState}>
					Click me!
				</button>
			</div>
		);
	}
}




export default SetState4;


