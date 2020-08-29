import React, { Component } from "react";

export default class Contact extends Component {
	render() {
		return (
			<section className="contact bg-primary">
				<div className="container">
					<h2>
						We
						<i className="fas fa-heart" />
						new friends!
					</h2>
					<ul className="list-inline list-social">
						<li className="list-inline-item social-twitter">
							<a href="#">
								<i className="fab fa-twitter" />
							</a>
						</li>
						<li className="list-inline-item social-facebook">
							<a href="#">
								<i className="fab fa-facebook-f" />
							</a>
						</li>
						<li className="list-inline-item social-google-plus">
							<a href="#">
								<i className="fab fa-google-plus-g" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}
