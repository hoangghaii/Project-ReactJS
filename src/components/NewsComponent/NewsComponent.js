import React, { Component } from "react";
import NewsItem from "./NewsItemComponent/NewsItem";
import dataNews from "../../data.json";

class NewsComponent extends Component {
	render() {
		return (
			<div>
				<section className="download bg-primary text-center mb-5" id="download">
					<div className="container">
						<div className="row">
							<div className="col-md-8 mx-auto">
								<h2 className="section-heading">Page News!</h2>
							</div>
						</div>
					</div>
				</section>
				<div className="container">
					<div className="row text-center">
						{dataNews.map((item, idx) => (
							<NewsItem
								key={idx}
								idItem={item.id}
								imgSrc={item.imgSrc}
								title={item.title}
								quote={item.quote}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default NewsComponent;
