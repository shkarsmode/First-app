import React from 'react';
import Nav from '../Nav/Nav';
import News from '../News/News';
import "./Content.css";

const Content = () => {
	return(
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				<News />
			</div>
		</div>
	);
}

export default Content;