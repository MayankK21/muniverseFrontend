import React, { Component } from 'react';
import bgimg from './010e02be2d902662207ed5cc1bccf253.jpg'
import './error404.css';


class Error404 extends Component {
    render() {
        return (
            <div className="text-center">
	            <br/>
	            <button type="button" className="btn btn-danger text-center" disabled>Error code: 404</button>
	            <br/><br/>
	            <div id="textColor">
		            <h1>OOPS!</h1>
		            <h1>The Page Was Not Found</h1>
		            <h2 color="green">Ain't no music here!</h2>
		            <p>Sorry, but the page you're looking for is not found, has its name changed or is removed.</p>
		        </div>
	            <button type="button" className="btn btn-primary text-center">Go to Homepage</button>
	        </div>
        )
    }
}

export default Error404
