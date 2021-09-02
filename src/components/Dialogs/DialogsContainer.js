import React from 'react';
import Message from './Message';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const DiaItem = props => {
	return(
		<NavLink to={`/dialogs/id${props.id}`}>
			<Message name={props.name} url={props.url}/>
		</NavLink>
	);
}

let mapStateToProps = state => {
	let dialogsElements = state.dialogsPage.dialogsData.map(el => (<DiaItem id={el.id} name={el.name} url={el.url}/>));
	return{
		dialogsElements: dialogsElements
	}
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer; 