import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import News from "../News/News";
import NewsDetail from "../NewsDetail/NewsDetail";
import Contact from "../Contact/Contact";

class RouterNav extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/news">
						<News />
					</Route>

					<Route path="/news_detail">
						<NewsDetail />
					</Route>

					<Route path="/contact">
						<Contact />
					</Route>
				</div>
			</Router>
		);
	}
}

export default RouterNav;
