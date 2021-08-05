import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import MyPage from '../MyPage/MyPage';
import Nav from '../Nav/Nav';
import News from '../News/News';
import "./Content.css";
import Messeges from '../Messeges/Messeges';

const Content = () => {
	return(
		<BrowserRouter>
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				{/* <Route path='/' component={MyPage}/> */}
				<Route path='/profile' component={MyPage}/>
				<Route exact path='/dialogs' component={Dialogs}/>
				<Route path='/news' component={News}/>
				<Route path='/dialogs/:id' component={Messeges}/>
			</div>
		</div>
		</BrowserRouter>
	);
}

export default Content;