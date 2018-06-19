import React, { Component } from 'react';
import SearchScreen from '../SearchScreen';
import ResultsScreen from '../ResultsScreen';
import API from '../../utils/API';

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			topic: "",
			startYear: "",
			endYear: "",
			results: [],
		}
	};

	searchNYT = (query) => {
		API.getNewArticles(query)
			.then(res => {
				this.setState({ results: res.data.response.docs });
				console.log(res.data.response);
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
			// Save successful
			console.log(res.data);
		})
		.catch(err => console.log(err));
	};

	render(){
		return (
			<div className="container">
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