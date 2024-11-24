
/*
    https://react.dev/reference/react/Component
    Component is the base class for the React components 
    defined as JavaScript classes. Class components are still supported by React,
    but we don’t recommend using them in new code.
*/

import { Component } from "react"

/*

Approach 4: Updating the state using its previous value.
We create an initial state count having a value of 0. The function updateState() 
increments the present value of the state by 1 whenever it is called. 
This time we use setState() method in an arrow function by passing prevState as a parameter.
 The current value of the state is accessed with prevState.stateName
  which gets incremented by 1 whenever we press the button. 
  This method is really useful when we are setting a value in the state in such a way 
  that it depends on its previous value. For example, 
  toggling a boolean (true/false) or incrementing/decrementing a number.


*/

class SetState2 extends Component {
	constructor(props) {
		super(props);

		// Set initial state
		this.state = {
			count: 0,
		};

		// Binding this keyword
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		// Changing state
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	render() {
		return (
			<div className="state-container">
                <p>
                    Approach 4: Updating the state using its previous value:
                    <a href="https://www.geeksforgeeks.org/reactjs-setstate/" target="blank"> Source info</a>
                </p>
                
				<h2>Click Counter</h2>
				<p>
					You have clicked me {this.state.count}{" "}
					times.
				</p>
				{/* Set click handler */}
				<button onClick={this.updateState}>
					Click me!
				</button>
			</div>
		);
	}
}

export default SetState2;


