import React, { Component } from "react";
import HomeMasthead from "./Masthead/Masthead";
import HomeDownload from "./Download/Download";
import HomeFeatures from "./Features/Features";
import HomeCta from "./Cta/Cta";
import HomeContact from "./Contact/Contact";

class HomeComponent extends Component {
	render() {
		return (
			<div>
				<HomeMasthead />
				<HomeDownload />
				<HomeFeatures />
				<HomeCta />
				<HomeContact />
			</div>
		);
	}
}

export default HomeComponent;
