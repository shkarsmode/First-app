// BLL - Business Logic Layer OOP
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
	_state: {
		dialogsPage: {
			messegesData: [
				{name: 'Vitalya Rudkin', mess: 'Привет, тут еще кто-то обитает?', url: 'https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'},
				{name: 'Daniil Shkarupa', mess: 'Делаю соц-сеть!', url: 'https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1'}],

			dialogsData: [
				{id: 2, name: 'Vitalya Grudkin', url: 'https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'},
				{id: 3, name: 'Maks Barishov', url: 'https://sun6-21.userapi.com/s/v1/ig1/B5EgucLMdYcVwnurQ_B6u1pLIXQsW-ZlfPuGlqKJXVTVB2Z0Mydy6_c37cHgW69lDdsx-tWW.jpg?size=50x0&quality=96&crop=275,101,470,470&ava=1'},
				{id: 4, name: 'Olexandr Serdyuk', url: 'https://sun6-22.userapi.com/s/v1/if2/mmeHCdCqnwTla0qJ5X_7WfS3eMX-YHjaJjmdi_x2cT1lQl6Unlij7acqiv3gJ1hs0NHZaFBBrsexvdtNaqo-6g18.jpg?size=50x0&quality=96&crop=162,162,1296,1296&ava=1'}],
		},
		profilePage:{
			postsData: [
				{id: 1, title: 'It`s my first post!'},
				{id: 2, title: 'It`s my second post! WOW!'}],	
			newPostText : '',
			friendsData: [
				{name: 'Dmitry', url: 'https://sun6-20.userapi.com/s/v1/ig2/P-OoTYB8oSfhhp5s0rofLhlaMkEUZZguy1_MI3ueiTNr2ER3hnUk8gqzwa8Ob2yYggWMf1aPcuGP16KB6JFEgDVy.jpg?size=50x0&quality=96&crop=86,167,1459,1459&ava=1'},
				{name: 'Nastya', url: 'https://sun6-23.userapi.com/s/v1/if1/F02cNj9AJf4u6ocDSUuNPrMxuywii79FcUqbk1o8X-_LUinqLU7ZR5LpJw1O0ILOeSccf70l.jpg?size=50x0&quality=96&crop=3,287,1615,1615&ava=1'},
				{name: 'Vadim', url: 'https://sun6-22.userapi.com/s/v1/if1/glM1f85wfy0D0osBDsFleibFeciFfCt-nPKB17IOYAgxPfR4lhXVh5JaCujlOCDkdgZggM4L.jpg?size=50x0&quality=96&crop=31,47,577,577&ava=1'},
				{name: 'Vika', url: 'https://sun6-22.userapi.com/s/v1/if1/XbL2-KNcMnUqDZCF9uIgUUrj35wrnaS0QE3JhUvwOnH9FpomwaQqlrHqQ7QFwJ7byUqmUB5_.jpg?size=50x0&quality=96&crop=127,127,705,705&ava=1'},
				{name: 'Jeka', url: 'https://sun6-20.userapi.com/s/v1/if1/1N6B5MOKe2PBFHGH6OYO9euQ372yryp-kA2hTWCHvzbI8wm0iBfK9rKj8Yq_yOjHGnBzjg.jpg?size=50x0&quality=96&crop=695,215,415,415&ava=1'},
				{name: 'Irina', url: 'https://sun6-21.userapi.com/s/v1/ig2/XFOvmletk-fnKphtwjOGaWfiER5eWf0vHxtm64m70ECJUHQJ5T1dxpHGRldquv-069dmTv4wOPF843P8PsTMGern.jpg?size=50x0&quality=96&crop=13,10,2135,2135&ava=1'},]
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
			this._rerenderEntireTree(store);
		} else if(action.type === UPDATE_POST_TEXT){
			this._state.profilePage.newPostText = action.text;
			this._rerenderEntireTree(store);
		} else if(action.type === ADD_MESSAGE){
			let newMessage = {name: 'Daniil', mess: action.mess, url: 'https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1'};
			this._state.dialogsPage.messegesData.push(newMessage);
			this._rerenderEntireTree(store);
		}
	}
}

export let addMessageCre = (mess)=>({type: ADD_MESSAGE,	mess: mess});

export let addPostCre = ()=>({type: ADD_POST});

export let updatePostCre = (text)=>({type: UPDATE_POST_TEXT, text: text});

export default store;