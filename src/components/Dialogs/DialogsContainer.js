import React from 'react';
import Message from './Message';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () =>{
	return <StoreContext.Consumer>
		{
			(store)=> {
				let dialogsElements = store.getState().dialogsPage.dialogsData.map(el => (<DiaItem id={el.id} name={el.name} url={el.url}/>));
				return <Dialogs dialogsElements = {dialogsElements}/>
			}
		}
	</StoreContext.Consumer>
}

const DiaItem = (props) =>{
	return(
		<NavLink to={`/dialogs/id${props.id}`}>
			<Message name={props.name} url={props.url}/>
		</NavLink>
	);
}

export default DialogsContainer; 