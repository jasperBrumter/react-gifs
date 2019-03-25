import React, { Component } from "react";
import Gif from "./gif"

class Giflist extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="giflist">
				{
					this.props.gifs.map(item => {
						return <Gif id={item.id} clickFunction={this.props.gifFunction}/>
					})
				}
			</div>
		)
	}
}

export default Giflist;