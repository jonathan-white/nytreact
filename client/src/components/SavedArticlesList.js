import React from 'react';
import SavedArticle from './SavedArticle';

const SavedArticlesCard = (props) => (
	<div className="card">
		<div className="card-header">
			<h2>Saved Articles</h2>
		</div>
		<div className="card-body" style={{minHeight: (142 * props.articles.length + 150)}}>
			{props.articles.length ? (
				<ul className="article-list">
					{props.articles.map(article => (
						<li key={article._id}>
							<SavedArticle
								article={article}
								handleRemoveClick={() => props.handleRemoveClick(article._id)}
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

export default SavedArticlesCard;
