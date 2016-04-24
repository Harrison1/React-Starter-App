import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navbar extends React.Component {
	render() {
		//console.log(this.props.location.pathname);

		//const { location } = this.props.location;
	    const featuredClass = this.props.location.pathname === "/" ? "active" : "";
	    const archivesClass = this.props.location.pathname.match(/^\/archives/) ? "active" : "";
	    const settingsClass = this.props.location.pathname.match(/^\/settings/) ? "active" : "";

		return (

		    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		      <div class="container">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          <a class="navbar-brand" href="#">Harry theme</a>
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav">
		            <li class={featuredClass}>
		            	<IndexLink to="/">Featured</IndexLink>
		            </li>
		            <li class={archivesClass}>
		            	<Link to="archives">Archives</Link>
		            </li>
		            <li class={settingsClass}>
		            	<Link to="settings">Settings</Link>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </div>
		    
		);
	}
}
