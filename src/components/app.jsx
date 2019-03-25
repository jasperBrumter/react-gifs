import React, { Component } from 'react';
import Giphy from "giphy-api";

import SearchBar from "./searchbar.jsx";
import Gif from "./gif";
import Giflist from "./giflist";

class App extends Component {
	constructor(props) {
		super(props);

		this.state={
			gif_array: [],
			selected_gif_id: ""
		}
	}

	updategif= (event) => {
		this.setState({
			selected_gif_id: event.target.src.split("/")[4]
		})
	}

	search = (query) => {
		Giphy("tfQTi2IBzCwnHfi1GLGxaD9h761pcjHX").search({
		    q: query,
		    rating: 'g',
		    limit: 10
		}, (err, res) => {
			this.setState({
				gif_array: res.data
			})
		});
	}


	render(){
		return(
			<div className="full">
		  		<div className = "leftSide">
		  			<SearchBar search={this.search}/>
		  			<Gif id={this.state.selected_gif_id}/>
			    </div>
			    <div className="rightSide">
			    	<Giflist gifFunction={this.updategif} gifs={this.state.gif_array}/>
			    </div>
		  	</div>
		)
	}
}

export default App;