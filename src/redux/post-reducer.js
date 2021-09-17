const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	postsData: [
		{ id: 1, title: 'It`s my first post!' },
		{ id: 2, title: 'It`s my second post!' }],
	newPostText: '',
	friendsData: [
		{ name: 'Dmitry', url: 'https://picsum.photos/233' },
		{ name: 'Nastya', url: 'https://picsum.photos/235' },
		{ name: 'Vadim', url: 'https://picsum.photos/237' },
		{ name: 'Vika', url: 'https://picsum.photos/238' },
		{ name: 'Jeka', url: 'https://picsum.photos/264' },
		{ name: 'Irina', url: 'https://picsum.photos/274' },],
	userProfile: null
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [...state.postsData, { id: 5, title: state.newPostText }],
				newPostText: ''
			}
		case UPDATE_POST_TEXT: return { ...state, newPostText: action.text }
		case SET_USER_PROFILE: return { ...state, userProfile: action.data }
		default: return state;
	}
}

export let addPost = () => ({ type: ADD_POST });
export let updatePost = text => ({ type: UPDATE_POST_TEXT, text });
export let setUserProfile = data => ({ type: SET_USER_PROFILE, data })
export default postReducer;

