// BLL - Business Logic Layer OOP
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let store = {
	_state: {
		dialogsPage: {
			messegesData: [
				{name: 'Vitalya Rudkin', mess: 'Привет, тут еще кто-то обитает?', url: 'https://picsum.photos/200'},
				{name: 'Daniil Shkarupa', mess: 'Делаю соц-сеть!', url: 'https://picsum.photos/230'}],
			newMessageText: '',
			dialogsData: [
				{id: 2, name: 'Vitalya Grudkin', url: 'https://picsum.photos/200'},
				{id: 3, name: 'Maks Barishov', url: 'https://picsum.photos/250'},
				{id: 4, name: 'Olexandr Serdyuk', url: 'https://picsum.photos/270'}],
		},
		profilePage:{
			postsData: [
				{id: 1, title: 'It`s my first post!'},
				{id: 2, title: 'It`s my second post! WOW!'}],	
			newPostText : '',
			friendsData: [
				{name: 'Dmitry', url: 'https://picsum.photos/233'},
				{name: 'Nastya', url: 'https://picsum.photos/235'},
				{name: 'Vadim', url: 'https://picsum.photos/237'},
				{name: 'Vika', url: 'https://picsum.photos/238'},
				{name: 'Jeka', url: 'https://picsum.photos/264'},
				{name: 'Irina', url: 'https://picsum.photos/274'},]
		}
	},
	_rerenderEntireTree(){}, // callback from observer

	getState(){return this._state},
	subscribe(observer){this._rerenderEntireTree = observer},
	
	dispatch(action){
		if(action.type === ADD_POST){
			let newPosts = {id: 5, title: this._state.profilePage.newPostText};
			this._state.profilePage.postsData.push(newPosts);
			this._state.profilePage.newPostText = '';
		} else if(action.type === UPDATE_POST_TEXT) this._state.profilePage.newPostText = action.text;
			else if(action.type === ADD_MESSAGE){
			this._state.dialogsPage.newMessageText = '';
			let newMessage = {name: 'Daniil Shkarupa', mess: action.mess, url: 'https://picsum.photos/230'};
			this._state.dialogsPage.messegesData.push(newMessage);
		} else if(action.type === UPDATE_MESSAGE) this._state.dialogsPage.newMessageText = action.text;
		this._rerenderEntireTree(store);
	}
}

export let addMessageCre = (mess)=>({type: ADD_MESSAGE,	mess: mess});
export let addPostCre = ()=>({type: ADD_POST});
export let updatePostCre = (text)=>({type: UPDATE_POST_TEXT, text: text});
export let updateMessageCre = (text)=>({type: UPDATE_MESSAGE, text: text});

export default store;