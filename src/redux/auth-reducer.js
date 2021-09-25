const SET_USER_DATA = 'SET-USER-DATA';
// const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
	id: null,
	email: null,
	login: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default: return state;
	}
}

export let setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export default authReducer;

