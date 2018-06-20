import React, {Component} from 'react';
import moment from 'moment';
import API from '../utils/API';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

class NewArticle extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	};

	handleSaveClick = (articleEntry) => {
		API.saveArticle({
			headline: articleEntry.headline.print_headline,
			snippet: articleEntry.snippet,
			web_url: articleEntry.web_url,
			source: articleEntry.source,
			section_name: articleEntry.section_name || "",
			pub_date: articleEntry.pub_date,
		})
		.then(res => {

			// Trigger savedArticle event
			socket.emit('savedArticle', articleEntry.headline.print_headline);
		})
		.catch(err => console.log(err));
	};

	render() {
		socket.on('savedArticle', (msg) => {
			console.log('Home - render: '+ msg);
			this.setState({
				message: msg
			})
		});
		return (
			<div className="card article">
				<div className="card-header">
					<a href={this.props.article.web_url} target="_blank">
						<span className="headline">
							{this.props.article.headline.print_headline}
						</span>
					</a>
					<button 
						className="btn btn-success save" 
						onClick={() => this.props.handleSaveClick(this.props.article)}
					>Save</button>
				</div>
				<div className="card-body">
					<div>
						<p>{this.props.article.snippet}</p>
					</div>
					<div className="d-flex justify-content-between">
						<div>
							<p className="font-italic">
								{moment(this.props.article.pub_date).format("MMMM Do YYYY, h:mm:ss a")}
							</p>
						</div>
						<div>
							<p>{this.props.article.section_name}</p>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<a href={this.props.article.web_url} target="_blank">
							View Full Article
						</a>
						<div className="news-source">
							{this.props.article.source}
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default NewArticle;