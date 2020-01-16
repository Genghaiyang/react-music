import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Recommend from '../pages/recommend'
class RouteConfig extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
                    <Redirect from="/" to="/recommend" exact />
					<Route path="/recommend" exact component={Recommend} />
					{/* <Route path="/production" exact component={Production} /> */}
					{/* <Redirect to="/" /> */}
				</Switch>
			</HashRouter>
		)
	}
}
export default RouteConfig
