import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import SearchBar from "./components/searchbar";

const Structure = () => {
  return (
  	<div className="full">
  		<div className = "leftSide">
  			<SearchBar />
	    </div>
	    <div className="rightSide">
	    </div>
  	</div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Structure />, root);
}
