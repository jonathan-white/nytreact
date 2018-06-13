import React, { Component } from 'react';

class SavedArticles extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	};
	
	render(){
		return (
			<div className="card">
				<div className="card-header">
					<h2>Saved Articles</h2>
				</div>
				<div className="card-body">
					Saved articles will display here
				</div>
			</div>
		);
	};
};

export default SavedArticles;