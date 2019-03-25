import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};
	}
	render() {
		return <input type="text" className={this.state.focused ? 'focused search' : "search"} onFocus={this.handleFocusIn} onBlur={this.handleFocusOut} onChange={this.handleChange} placeholder="Search here"/>
	}
	handleFocusIn = () => {
		this.setState({ focused: true})
	}

	handleFocusOut = () => {
		this.setState({ focused: false})
	}

	handleChange = (event) => {
		this.props.search(event.target.value)
	}
}

export default SearchBar;