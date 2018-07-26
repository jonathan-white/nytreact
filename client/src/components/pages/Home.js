import React, { Component } from 'react';
import SearchScreen from '../SearchScreen';
import ResultsScreen from '../ResultsScreen';
import Alert from '../Alert';
import API from '../../utils/API';
import moment from 'moment';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			topic: "",
			startYear: moment().add(-7, 'days').format('YYYY-MM-DD') || "",
			endYear: moment().format('YYYY-MM-DD') || "",
			results: [],
			saveStatus: 0,
			message: "",
		}
	};

	searchNYT = (query) => {
		API.getNewArticles(query)
			.then(res => {
				this.setState({ results: res.data.response.docs });
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.topic && this.state.startYear && this.state.endYear) {
			const query = {
				topic: this.state.topic,
				startYear: this.state.startYear,
				endYear: this.state.endYear
			};
			this.searchNYT(query);
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
			this.setState({
				saveStatus: 1,
				message: ""
			});
		})
		.catch(err => {
			if(err.response.status === 409) {
				// Duplicate save request received
				this.setState({ saveStatus: 2});
			} else {
				// All other server http error statuses
				this.setState({ saveStatus: 3});
			}
		});
	};

	removeAlert = () => this.setState({ saveStatus: 0 })

	render(){
		socket.on('savedArticle', (msg) => {
			console.log('Home - render: '+ msg);
			this.setState({
				message: msg
			})
		});

		return (
			<div className="container">
				{this.state.saveStatus === 1 &&
					<Alert
						message={`Saved: ${this.state.message}`}
						classes={'alert-primary'}
						handleClose={() => this.removeAlert()}
					/>
				}
				{this.state.saveStatus === 2 &&
					<Alert
						message={`This article has already been saved!`}
						classes={'alert-warning'}
						handleClose={() => this.removeAlert()}
					/>
				}
				{this.state.saveStatus === 3 &&
					<Alert
						message={`Error occurred while saving. Try again later.`}
						classes={'alert-danger'}
						handleClose={() => this.removeAlert()}
					/>
				}
				<section className="row d-flex justify-content-center">
					<div className="col-12">
						<SearchScreen
							prevState={this.state}
							handleInputChange={this.handleInputChange}
							handleFormSubmit={this.handleFormSubmit}
						/>
					</div>
				</section>
				<section className="row d-flex justify-content-center">
					<div className="col-12">
						<ResultsScreen
							results={this.state.results}
							handleSaveClick={this.handleSaveClick}
						/>
					</div>
				</section>
			</div>
		);
	};
};

export default Home;
