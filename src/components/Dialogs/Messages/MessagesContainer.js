import React from 'react';
import { addMessageCre,  updateMessageCre} from '../../../redux/dialogs-reducer';
import Messages from './Messages';
import Message from './Message';
import {connect} from 'react-redux';

let mapStateToProps = state => {
	let messages = state.dialogsPage.messegesData.map(mess => <Message name={mess.name} mess={mess.mess} url={mess.url}/>);
	return{
		messages: messages,
		newMessageText: state.dialogsPage.newMessageText,
		onloadOnresize: state.dialogsPage.onloadOnresize
	}
}

let mapDispatchToProps = dispatch => {
	let sendMessageHelp = input => dispatch(addMessageCre(input));
	return{
		updateMessage: input => dispatch(updateMessageCre(input)),
		sendMessage: input => {
			if(input != '')
				sendMessageHelp(input);
		},
		sendMessage2: (el, input)=> {
			if(el.code == "Enter" && input != '')
				sendMessageHelp(input);
		}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;



