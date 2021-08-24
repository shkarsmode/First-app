import React from 'react';
import { addMessageCre,  updateMessageCre} from '../../../redux/dialogs-reducer';
import Messages from './Messages';
import Message from './Message';
import StoreContext from '../../../storeContext';

const MessagesContainer = () =>{
	return <StoreContext.Consumer>
		{
		(store)=>{
			let dispatch = store.dispatch;
			let dialogsPage = store.getState().dialogsPage;
			let messages = dialogsPage.messegesData.map(mess => <Message name={mess.name} mess={mess.mess} url={mess.url}/>);
			let sendMessage = (input)=> {
				if(input != '')
					sendMessageHelp(input);
			}

			let sendMessage2 = (el, input)=> {
				if(el.code == "Enter" && input != '')
					sendMessageHelp(input);
			}
	
			let updateMessage = input => dispatch(updateMessageCre(input));
			let sendMessageHelp = input => dispatch(addMessageCre(input));
	
			return (
				<Messages 
					messages = {messages}
					updateMessage ={updateMessage}
					sendMessage = {sendMessage}
					sendMessage2 = {sendMessage2}
					newMessageText = {dialogsPage.newMessageText}
					onloadOnresize = {dialogsPage.onloadOnresize}/>)
		}}
		</StoreContext.Consumer>
}

export default MessagesContainer;



