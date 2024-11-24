
/*
Source: https://legacy.reactjs.org/docs/state-and-lifecycle.html

Life Cycle methods
*/

import { Component } from "react"


class Clock extends Component {
	constructor(props) {
	  super(props);
	  this.state = {date: new Date()};
	}
  
	componentDidMount() {
	  this.timerID = setInterval(
		() => this.tick(),
		1000
	  );
	}
  
	componentWillUnmount() {
	  clearInterval(this.timerID);
	}
  
	tick() {
	  this.setState({
		date: new Date()
	  });
	}
  
	render() {
	  return (
		<div className="state-container">
		  <h1 >Life cycle methods in Clock!</h1>
		  <a href="https://legacy.reactjs.org/docs/state-and-lifecycle.html">Code Source </a>
		  <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		</div>
	  );
	}
  }



  export default Clock;

/*
	the Clock component you provided is a good example of 
	utilizing lifecycle methods in a class component. 
	Let's break down how each lifecycle method is used:

	Constructor (constructor()):
		Initializes the component's state with the current date.

	Component Did Mount (componentDidMount()):
		Sets up an interval to call the tick() method every second after the component has been mounted to the DOM.
		This is where you typically start any processes that involve timers, subscriptions, or fetching data.

		The setInterval function in JavaScript returns a numeric ID (interval ID) that uniquely identifies the interval timer. This ID can be used to later cancel the interval using the clearInterval function if needed.

		
	Component Will Unmount (componentWillUnmount()):
		Clears the interval set up in componentDidMount() when the component is about to be removed from the DOM.
		This is where you perform cleanup tasks such as unsubscribing from external data sources to prevent memory leaks.

	
	Tick Method (tick()):
		Updates the component's state with the current date, causing the component to re-render with the updated time.
		This method is called by the interval set up in componentDidMount().
		
	
	Render Method (render()):
		Renders the JSX to display the current time.
		Overall, this example demonstrates a common pattern for creating components that need to perform actions over time or in response to changes in the component's lifecycle. It effectively uses lifecycle methods to manage timers and update the component's state accordingly.

*/


