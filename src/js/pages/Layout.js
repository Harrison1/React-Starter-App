import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default class Layout extends React.Component {

	render() {
		const { location } = this.props;
		const containerStyle = {
      		marginTop: "60px"
    	};

		return (
			<div>
				<Navbar location={location} />
					<div class="container theme-showcase" role="main" style={containerStyle}>
						<h1>Harry News</h1>
						{this.props.children}
					</div>
				<Footer />		
			</div>
		);
	}
}