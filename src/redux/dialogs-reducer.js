const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialogsReducer = (state, action)=>{
	switch(action.type){
		case ADD_MESSAGE: state.newMessageText = '';
		let newMessage = {name: 'Daniil Shkarupa', mess: action.mess, url: 'https://picsum.photos/230'};
		state.messegesData.push(newMessage); break;
		case UPDATE_MESSAGE: state.newMessageText = action.text; break;
	}
	return state;
}

export let addMessageCre = (mess)=>({type: ADD_MESSAGE,	mess: mess});
export let updateMessageCre = (text)=>({type: UPDATE_MESSAGE, text: text});

export default dialogsReducer;

