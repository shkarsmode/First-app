import React from 'react';
import { addMessageCre,  updateMessageCre} from '../../../redux/dialogs-reducer';
import Messages from './Messages';
import Message from './Message';

const MessagesContainer = (props) =>{
	let messages = props.mesData.messegesData.map(mess => <Message name={mess.name} mess={mess.mess} url={mess.url}/>);

	let sendMessage = (input)=> {
		if(input != '')
			sendMessageHelp(input);
	}

	let sendMessage2 = (el, input)=> {
		if(el.code == "Enter" && input != '')
			sendMessageHelp(input);
	}

	let updateMessage = input => props.dispatch(updateMessageCre(input));
	let sendMessageHelp = input => props.dispatch(addMessageCre(input));

	return <Messages 
		messages = {messages}
		updateMessage ={updateMessage}
		sendMessage = {sendMessage}
		sendMessage2 = {sendMessage2}
		newMessageText = {props.mesData.newMessageText}
		onloadOnresize = {props.mesData.onloadOnresize}/>
}

export default MessagesContainer;



