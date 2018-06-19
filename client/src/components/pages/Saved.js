import React, { Component } from 'react';
import SavedArticlesList from '../SavedArticlesList';
import API from '../../utils/API';

class Saved extends Component{
	constructor(props){
		super(props);
		this.state = {
			articles: [],
		}
	};


	componentDidMount = () => {
		this.loadSavedArticles();
	};

	loadSavedArticles = () => {
		API.getSavedArticles()
			.then(res => this.setState({ articles: res.data }))
			.catch(err => console.log(err));
	};

	handleRemoveClick = (articleId) => {
		API.deleteArticle(articleId)
			.then(res => this.loadSavedArticles())
			.catch(err => console.log(err));
	}
	
	render(){
		return (
			<div>
				<SavedArticlesList 
					articles={this.state.articles}
					handleRemoveClick={this.handleRemoveClick}
				/>
			</div>
		);
	};
};

export default Saved;