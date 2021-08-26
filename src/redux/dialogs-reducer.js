const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
	messegesData: [
		{name: 'Vitalya Rudkin', mess: 'Привет, тут еще кто-то обитает?', url: 'https://picsum.photos/200'},
		{name: 'Daniil Shkarupa', mess: 'Вот такая вот жизнь', url: 'https://picsum.photos/230'}],
	newMessageText: '',
	dialogsData: [
		{id: 2, name: 'Vitalya Grudkin', url: 'https://picsum.photos/200'},
		{id: 3, name: 'Maks Barishov', url: 'https://picsum.photos/250'},
		{id: 4, name: 'Olexandr Serdyuk', url: 'https://picsum.photos/270'}],
	onloadOnresize(content){
		if(content.current && window.innerHeight > 300) 
			content.current.style.height = window.innerHeight-225 + 'px';
	}
};

const dialogsReducer = (state = initialState, action)=>{
	let stateNew = {...state};
	switch(action.type){
		case ADD_MESSAGE: 
		let newMessage = {name: 'Daniil Shkarupa', mess: action.mess, url: 'https://picsum.photos/230'};
		stateNew = {
			messegesData: [...state.messegesData, newMessage],
			newMessageText: ''
		}; break;
		case UPDATE_MESSAGE: stateNew.newMessageText = action.text; break;
	} return stateNew;
}

export let addMessageCre = (mess)=>({type: ADD_MESSAGE,	mess: mess});
export let updateMessageCre = (text)=>({type: UPDATE_MESSAGE, text: text});
export default dialogsReducer;

