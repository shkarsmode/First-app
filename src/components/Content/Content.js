import React from 'react';
import { Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import MyPageContainer from '../MyPage/MyPageContainer';
import Nav from './Nav/Nav';
import News from '../News/News';
import "./Content.css";
import Messages from '../Dialogs/Messages/Messages';

const Content = (props) => {
	return(
		<div className="wrap-center">
			<div className="wrap-content">
				<Nav />
				{/* <Route path='/' component={MyPage}/> */}
				<Route path='/profile' render = {() => 
					<MyPageContainer 
					state={props.stateProfile} 
					dispatch={props.dispatch}/>}/>
				<Route exact path='/dialogs' render = {() => 
					<Dialogs diaData={props.stateDialogs.dialogsData}/>}/>
				<Route path='/news' render = {() => 
					<News />}/>
				<Route path='/dialogs/:id' render = {() => 
					<Messages mesData={props.stateDialogs} dispatch={props.dispatch}/>}/>
			</div>
		</div>
	);
}

export default Content;