import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import MyPage from '../MyPage/MyPage';
import Nav from '../Nav/Nav';
import News from '../News/News';
import "./Content.css";

const Content = () => {
	return(
		<BrowserRouter>
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				<Route component={MyPage}/>
				<Route component={Dialogs}/>
				<Route component={News}/>

			</div>
		</div>
		</BrowserRouter>
	);
}

export default Content;