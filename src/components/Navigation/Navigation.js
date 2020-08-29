import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
	render() {
		return (
			<div>
				<nav
					className="navbar navbar-expand-lg navbar-light fixed-top"
					id="mainNav"
				>
					<div className="container">
						<NavLink className="nav-link js-scroll-trigger" to="/home">
							React Router - News
						</NavLink>

						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fas fa-bars" />
						</button>

						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink
										className="nav-link js-scroll-trigger nav-link-active2"
										activeClassName="nav-link-selected"
										to="/home"
									>
										Home
									</NavLink>
								</li>

								<li className="nav-item">
									<NavLink
										className="nav-link js-scroll-trigger nav-link-active2"
										activeClassName="nav-link-selected"
										to="/news"
									>
										News
									</NavLink>
								</li>

								{/* <li className="nav-item">
									<NavLink
										className="nav-link js-scroll-trigger nav-link-active2"
										activeClassName="nav-link-selected"
										to="/news_detail"
									>
										News Detail
									</NavLink>
								</li> */}

								<li className="nav-item">
									<NavLink
										className="nav-link js-scroll-trigger nav-link-active2"
										activeClassName="nav-link-selected"
										to="/contact"
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
