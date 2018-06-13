import React from 'react';

const Article = props => (
	<div className="card article">
		<div className="card-header">
			<a href={props.article.web_url} target="_blank">
				<span className="headline">
					{props.article.headline.print_headline}
				</span>
			</a>
			<button className="btn btn-success save" onClick={props.handleSaveClick}>Save</button>
		</div>
		<div className="card-body hide">
			<p>{props.article.snippet}</p>
			<p>{props.article.pub_date}</p>
		</div>
	</div>
);

export default Article;