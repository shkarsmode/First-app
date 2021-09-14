const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
	friendsData: [
		{ id: 10, name: 'Alyona Sumskaya', url: 'https://picsum.photos/236' },
		{ id: 11, name: 'Alexey Kurko', url: 'https://picsum.photos/225' },
		{ id: 15, name: 'Roha Zaika', url: 'https://picsum.photos/215' }
	],
	newFriends: [
		{ id: 25, name: 'Dmitriy Bondarenko', url: 'https://picsum.photos/200' }
	],
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (action.userId == u.id) return { ...u, sub: true }
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (action.userId == u.id)
						return { ...u, sub: false }
					return u;
				})
			}
		case SET_USERS:
			return {
				...state,
				usersData: [...action.users],
				totalUsersCount: action.count
			}
		case SET_CURRENT_PAGE: return { ...state, currentPage: action.page }
		case TOGGLE_IS_FETCHING: return { ...state, isFetching: action.isfetching }
		default: return state;
	}
}

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = (users, count) => ({ type: SET_USERS, users, count });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const toggleIsFetching = isfetching => ({ type: TOGGLE_IS_FETCHING, isfetching });


export default usersReducer;