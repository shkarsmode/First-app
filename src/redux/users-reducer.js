const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
		friendsData: [
			{id: 10, name: 'Alyona Sumskaya', url: 'https://picsum.photos/236'},
			{id: 11, name: 'Alexey Kurko', url: 'https://picsum.photos/225'},
			{id: 15, name: 'Roha Zaika', url: 'https://picsum.photos/215'}
		],
		newFriends: [
			{id: 25, name: 'Dmitriy Bondarenko', url: 'https://picsum.photos/200'}
		],
		usersData: [],
		pageSize: 5,
		totalUsersCount: 25
		
};

const usersReducer = (state = initialState, action)=>{
	switch(action.type){
		case FOLLOW:
			return {
				...state, 
				usersData: state.usersData.map(u=>{
					if(action.userId == u.id) return {...u, sub: true}
					return u;
				})
			}
		case UNFOLLOW: 
			return {
				...state, 
				usersData: state.usersData.map(u=>{
					if(action.userId == u.id)
						return {...u, sub: false}
					return u;
				})
			}
		case SET_USERS:
			return {
				...state, 
				usersData: [...state.usersData, ...action.users]
			}
		default: return state;
	}
}

export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users});


export default usersReducer;