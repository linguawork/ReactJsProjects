
/*
    https://react.dev/reference/react/Component
    Component is the base class for the React components 
    defined as JavaScript classes. Class components are still supported by React,
    but we don’t recommend using them in new code.
*/

import { Component } from "react"


class SetState3 extends Component {


	static defaultProps = {
		testTopics: [
			"React JS",
			"Node JS",
			"Compound components",
			"Lifecycle Methods",
			"Event Handlers",
			"Router",
			"React Hooks",
			"Redux",
			"Context",
		],
	};

	constructor(props) {
		super(props);

		// Set initial state
		this.state = {
			testName: "React js Test",
			topics: "",
		};

		// Binding this keyword
		this.updateState = this.updateState.bind(this);
	}

	listOfTopics() {
		return (
			<ul>
				{this.props.testTopics.map((topic) => (
					<li>{topic}</li>
				))}
			</ul>
		);
	}

	updateState() {
		// Changing state
		this.setState({
			testName: "Test topics are:",
			topics: this.listOfTopics(),
		});
	}

	render() {
		return (
			<div className="state-container">
                <p>
					Approach 3: Updating state values using props.
                    <a href="https://www.geeksforgeeks.org/reactjs-setstate/" target="blank"> Source info</a>
                </p>
                
				<p>{this.state.testName}</p>
				<p>{this.state.topics}</p>
				{/* Set click handler */}
				<button onClick={this.updateState}>
					Click me!
				</button>
			</div>
		);
	}
}




export default SetState3;


