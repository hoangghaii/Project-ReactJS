import React, { Component } from "react";

export default class Cta extends Component {
	render() {
		return (
			<section className="cta">
				<div className="cta-content">
					<div className="container">
						<h2>
							Stop waiting.
							<br />
							Start building.
						</h2>
						<a
							href="#contact"
							className="btn btn-outline btn-xl js-scroll-trigger"
						>
							Let's Get Started!
						</a>
					</div>
				</div>
				<div className="overlay" />
			</section>
		);
	}
}
