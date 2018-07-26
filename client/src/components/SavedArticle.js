import React from 'react';
import moment from 'moment';

const SavedArticle = (props) => (
	<div className="card article">
		<div className="card-header">
			<a href={props.article.web_url} target="_blank">
				<span className="headline">
					{props.article.headline}
				</span>
			</a>
			<button className="btn btn-danger remove" onClick={props.handleRemoveClick}>Remove</button>
		</div>
		<div className="card-body">
			<div>
				<p>{props.article.snippet}</p>
			</div>
			<div className="d-flex justify-content-between">
				<div>
					<p className="font-italic">
						{moment(props.article.pub_date).format("MMMM Do YYYY, h:mm:ss a")}
					</p>
				</div>
				<div>
					<p>{props.article.section_name}</p>
				</div>
			</div>
			<div className="d-flex justify-content-between">
				<a href={props.article.web_url} target="_blank">
					View Full Article
				</a>
				<div className="news-source">
					{props.article.source}
				</div>
			</div>
		</div>
	</div>
);

export default SavedArticle;
