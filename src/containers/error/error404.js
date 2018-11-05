import React, { Component } from 'react';

let imgUrl = "evgeny-grinko.jpg"
    let styles = {
        root: {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }
    }

class Error404 extends Component {
    render() {
        return (
            <div  class="text-center">
	            <br/>
	            <button type="button" class="btn btn-danger text-center" disabled>Error code: 404</button>
	            <br/><br/>
	            <h1>OOPS!</h1>
	            <h1>The Page Was Not Found</h1>
	            <h2 color="green">Ain't no music here!</h2>
	            <p>Sorry, but the page you're looking for is not found, has its name changed or is removed.</p>
	            <button type="button" class="btn btn-primary text-center">Go to Homepage</button>
	        </div>
        )
    }
}

export default Error404;