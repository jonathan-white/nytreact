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
			results: []
		}
	};

	searchNYT = (query) => {
		API.getArticles(query)
			.then(res => {
				this.setState({ results: res.data.response.docs });
				console.log(res.data.response);
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		console.log(value);
		
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const query = {
			topic: this.state.topic,
			startYear: this.state.startYear,
			endYear: this.state.endYear
		};
		this.searchNYT(query);
	};

	handleSaveClick = () => {

	};

	componentDidMount = () => {
		// this.searchNYT("The Matrix");
	};

	render(){
		return (
			<div className="container">
				<section className="row d-flex justify-content-center">
					<div className="col-12">
						<SearchScreen 
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