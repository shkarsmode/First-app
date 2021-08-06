import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import MyPage from '../MyPage/MyPage';
import Nav from './Nav/Nav';
import News from '../News/News';
import "./Content.css";
import Messages from '../Dialogs/Messages/Messages';

const Content = (props) => {
	return(
		<BrowserRouter>
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				{/* <Route path='/' component={MyPage}/> */}
				<Route path='/profile' render = {() => <MyPage postsData={props.postsData} friendsData={props.friendsData}/>}/>
				<Route exact path='/dialogs' render = {() => <Dialogs dialogsData={props.dialogsData}/>}/>
				<Route path='/news' render = {() => <News/>}/>
				<Route path='/dialogs/:id' render = {() => <Messages messegesData={props.messegesData}/>}/>
			</div>
		</div>
		</BrowserRouter>
	);
}

export default Content;