import React from 'react';
import MyPage from '../MyPage/MyPage';
import Nav from '../Nav/Nav';
import News from '../News/News';
import "./Content.css";

const Content = () => {
	return(
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				<MyPage />
				{/* <News /> */}
			</div>
		</div>
	);
}

export default Content;