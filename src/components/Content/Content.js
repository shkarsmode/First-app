import React from 'react';
import { Route } from 'react-router-dom';
import MyPageContainer from '../MyPage/MyPageContainer';
import Nav from './Nav/Nav';
import News from '../News/News';
import "./Content.css";
import MessagesContainer from '../Dialogs/Messages/MessagesContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import FriendsContainer from '../Friends/FriendsContainer';

const Content = () => {
	return(
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				{/* <Route path='/' component={MyPage}/> */}
				<Route path='/profile' render = {() => <MyPageContainer />}/>
				<Route exact path='/dialogs' render = {() => <DialogsContainer />}/>
				<Route path='/news' render = {() => <News />}/>
				<Route path='/dialogs/:id' render = {() => <MessagesContainer />}/>
				<Route path='/users' render = {()=> <FriendsContainer />}/>

			</div>
		</div>
	);
}

export default Content;