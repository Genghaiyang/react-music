import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from '../component/App'
class RouteConfig extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/" exact component={App} />
					{/* <Route path="/production" exact component={Production} /> */}
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		)
	}
}
export default RouteConfig
