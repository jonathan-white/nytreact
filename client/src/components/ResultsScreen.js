import React from 'react';
import NewArticle from './NewArticle';

const ResultsScreen = (props) => (
	<div className="card">
		<div className="card-header">
			<h2>Results</h2>
		</div>
		<div className="card-body">
			{props.results.length > 0 ? (
				<ul className="article-list">
					{props.results && props.results.map(article => (
						<li key={article._id}>
							<NewArticle
								article={article}
								handleSaveClick={() => props.handleSaveClick(article)}
							/>
						</li>
					))
					}
				</ul>
			) :	(<p>No Results.</p>)
			}
		</div>
	</div>
);

export default ResultsScreen;
