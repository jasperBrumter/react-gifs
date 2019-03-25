import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};
	}
	render() {
		return <input type="text" className={this.state.focused ? 'focused search' : "search"} onFocus={this.handleFocusIn} onBlur={this.handleFocusOut}  placeholder="Search here"/>
	}
	handleFocusIn = () => {
		this.setState({ focused: true})
	}

	handleFocusOut = () => {
		this.setState({ focused: false})
	}


}

export default SearchBar;