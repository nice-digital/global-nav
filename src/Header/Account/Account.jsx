import React, { Component } from "react";

export default class Account extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}

	componentDidMount() {
		console.warn("TODO: Check if we're logged in");
	}

	render() {
		return this.state.isLoggedIn ? (
			<p>You are logged in</p>
		) : (
			<a href="https://accounts.nice.org.uk/signin">Sign in</a>
		);
	}
}
