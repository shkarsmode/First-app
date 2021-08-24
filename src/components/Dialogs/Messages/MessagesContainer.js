import React from 'react';
import { addMessageCre,  updateMessageCre} from '../../../redux/dialogs-reducer';
import Messages from './Messages';
import Message from './Message';
import {connect} from 'react-redux';

// const MessagesContainer = () =>{
// 	return <StoreContext.Consumer>
// 		{
// 		(store)=>{
// 			let dispatch = store.dispatch;
// 			let dialogsPage = store.getState().dialogsPage;
// 			let messages = dialogsPage.messegesData.map(mess => <Message name={mess.name} mess={mess.mess} url={mess.url}/>);
// 			let sendMessage = (input)=> {
// 				if(input != '')
// 					sendMessageHelp(input);
// 			}

// 			let sendMessage2 = (el, input)=> {
// 				if(el.code == "Enter" && input != '')
// 					sendMessageHelp(input);
// 			}
	
// 			let updateMessage = input => dispatch(updateMessageCre(input));
// 			let sendMessageHelp = input => dispatch(addMessageCre(input));
	
// 			return (
// 				<Messages 
// 					messages = {messages}
// 					updateMessage ={updateMessage}
// 					sendMessage = {sendMessage}
// 					sendMessage2 = {sendMessage2}
// 					newMessageText = {dialogsPage.newMessageText}
// 					onloadOnresize = {dialogsPage.onloadOnresize}/>)
// 		}}
// 		</StoreContext.Consumer>
// }

let mapStateToProps = (state)=>{
	let messages = state.dialogsPage.messegesData.map(mess => <Message name={mess.name} mess={mess.mess} url={mess.url}/>);
	return{
		messages: messages,
		newMessageText: state.dialogsPage.newMessageText,
		onloadOnresize: state.dialogsPage.onloadOnresize
	}
}

let mapDispatchToProps = (dispatch)=>{
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

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;



