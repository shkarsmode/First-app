import React from 'react';
import { Route } from 'react-router-dom';
import MyPageContainer from '../MyPage/MyPageContainer';
import Nav from './Nav/Nav';
import News from '../News/News';
import "./Content.css";
import MessagesContainer from '../Dialogs/Messages/MessagesContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import FriendsContainer from '../Friends/FriendsContainer';
import UsersContainer from '../Friends/UsersContainer';

const Content = props => {
	return (
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav id={props.id} />
				<Route path='/profile/:id?' render={() => <MyPageContainer />} />
				{/* <Route path='/profile/' render={() => <MyPageContainer />} /> */}
				<Route exact path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/dialogs/:id' render={() => <MessagesContainer />} />
				<Route path='/friends' render={() => <FriendsContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
			</div>
		</div>
	)
}

export default Content;