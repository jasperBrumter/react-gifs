import React, { Component } from "react";


class Gif extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const link = `https://media1.giphy.com/media/${this.props.id}/200.gif`
		return(
			<img src={link} className="gif" onClick={this.props.clickFunction}></img>
		)
	}
}
export default Gif;