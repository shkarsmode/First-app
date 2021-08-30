// BLL - Business Logic Layer OOP
import postReducer from "./post-reducer";
import dialogsReducer from "./dialogs-reducer";

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
			onloadOnresize(content){
				if(content.current && window.innerHeight > 300) 
					content.current.style.height = window.innerHeight-225 + 'px';
			}
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
		},
		usersPage:{
			friendsData: [
				{id: 10, name: 'Alyona Sumskaya', url: 'https://picsum.photos/236'},
				{id: 11, name: 'Alexey Kurko', url: 'https://picsum.photos/225'},
			],
			newFriends: [
				{id: 25, name: 'Dmitriy Bondarenko', url: 'https://picsum.photos/216'}
			]
		}
	},

	_rerenderEntireTree(){}, // callback from observer
	
	getState(){return this._state},
	subscribe(observer){this._rerenderEntireTree = observer},
	dispatch(action){
		this._state.profilePage = postReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._rerenderEntireTree(store);
	}
}

export default store;