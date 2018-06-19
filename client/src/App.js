import React from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';

const App = () => (
	<Router>
		<main className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/saved" component={Saved} />
			</Switch>
		</main>
	</Router>
);

export default App;
