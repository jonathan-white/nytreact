import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';

const App = () => (
	<Router>
		<main className="App">
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/saved" component={Saved} />
		</main>
	</Router>
);

export default App;
