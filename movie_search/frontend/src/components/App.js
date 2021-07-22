import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Homepage from './homepage';
import SearchResults from './searchResults';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Homepage}></Route>
				<Route exact path='/search-results' component={SearchResults}></Route>
			</Switch>
		</Router>
	);
}

export default App