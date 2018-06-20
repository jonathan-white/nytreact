import React, { Component } from 'react';
import SavedArticle from './SavedArticle';

class SavedArticlesCard extends Component{
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
				<div className="card-body" style={{minHeight: (142 * this.props.articles.length + 150)}}>
					{this.props.articles.length ? (
						<ul className="article-list">
						{this.props.articles.map(article => (
									<li key={article._id}>
										<SavedArticle 
											article={article} 
											handleRemoveClick={() => this.props.handleRemoveClick(article._id)}
										/>
									</li>
								))
							}
							</ul>
						) : (<p>No Saved Articles.</p>)
					}
				</div>
			</div>
		);
	};
};

export default SavedArticlesCard;