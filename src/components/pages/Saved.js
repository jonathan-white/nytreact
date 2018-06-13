import React, { Component } from 'react';
import SavedArticles from '../SavedArticles';

class Saved extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	};
	
	render(){
		return (
			<div>
				<SavedArticles />
			</div>
		);
	};
};

export default Saved;