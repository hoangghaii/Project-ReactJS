import React, { Component } from "react";

class FormTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "" };
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		this.setState({ username: event.target.value });
	};

	handleSubmit = (event) => {
		alert(this.state.username);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<input
					type="text"
					value={this.state.username}
					onChange={(e) => this.handleChange(e)}
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
export default FormTest;
