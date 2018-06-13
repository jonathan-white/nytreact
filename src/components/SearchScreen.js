import React from 'react';

const SearchScreen = props => (
	<div className="card">
		<div className="card-header">
			<h2>Search</h2>
		</div>
		<div className="card-body">
			<form>
				<div className="form-group">
					<label htmlFor="topic">Topic</label>
					<input 
						className="form-control"
						type="text"
						id="topic"
						name="topic"
						placeholder="Enter a topic"
						onChange={props.handleInputChange}
					/>
				</div>	
				<div className="form-group">
					<label htmlFor="startYear">Start Year</label>
					<input 
						className="form-control"
						type="date"
						id="startYear"
						name="startYear"
						onChange={props.handleInputChange}
					/>
				</div>	
				<div className="form-group">
					<label htmlFor="endYear">End Year</label>
					<input 
						className="form-control"
						type="date"
						id="endYear"
						name="endYear"
						onChange={props.handleInputChange}
					/>
				</div>	
				<button className="btn btn-primary search" type="submit" onClick={props.handleFormSubmit}>Search</button>
			</form>
		
		</div>
	</div>
);

export default SearchScreen;