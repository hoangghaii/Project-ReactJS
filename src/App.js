import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/FooterComponent/FooterComponent";
import Home from "./components/HomeComponent/HomeComponent";
import News from "./components/NewsComponent/NewsComponent";
import NewsDetail from "./components/NewsDetailComponent/NewsDetailComponent";
import Contact from "./components/ContactComponent/ContactComponent";
class App extends Component {
	render() {
		return (
			<Router>
				<div id="page-top">
					<Navigation />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/home">
							<Home />
						</Route>

						<Route exact path="/news">
							<News />
						</Route>

						<Route
							exact
							// path="/news_detail/:id"
							path="/news_detail/:slug.:id.html"
							children={<NewsDetail />}
						/>
						{/* <NewsDetail />
						</Route> */}

						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
