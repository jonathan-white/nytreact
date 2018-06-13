import React from 'react';
import Article from './Article';

const ResultsScreen = props => (
	<div className="card">
		<div className="card-header">
			<h2>Results</h2>
		</div>
		<div className="card-body">
			<ul className="article-list">
			{props.results && props.results.map((article, i) => {
					if(i < 5) {
						return (
							<li key={article._id}>
								<Article 
									article={article} 
									handleSaveClick={props.handleSaveClick}
								/>
							</li>
						);
					}
				}
			)}
			</ul>
		</div>
	</div>
);

export default ResultsScreen;