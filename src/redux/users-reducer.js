const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
		friendsData: [
			{id: 10, name: 'Alyona Sumskaya', url: 'https://picsum.photos/236'},
			{id: 11, name: 'Alexey Kurko', url: 'https://picsum.photos/225'},
			{id: 15, name: 'Roha Zaika', url: 'https://picsum.photos/215'}
		],
		newFriends: [
			{id: 25, name: 'Dmitriy Bondarenko', url: 'https://picsum.photos/200'}
		],
		usersData: [
			{id: 0, years: 18, name: 'Borya Vykrutasov', sub: false, url: 'https://picsum.photos/150'},
			{id: 1, years: 15, name: 'Marina Vykova', sub: false, url: 'https://picsum.photos/151'},
			{id: 2, years: 22, name: 'Danya Vykyrdygdanov', sub: false, url: 'https://picsum.photos/152'}
		]
};

const usersReducer = (state = initialState, action)=>{
	switch(action.type){
		// case FOLLOW:
		// 	debugger;
		// 	return {
		// 		...state, 
		// 		usersData: state.usersData.map(u=>{
		// 			if(action.userId == u.id) return {...u, sub: true}
		// 			return u;
		// 		})
		// 	}
		case FOLLOW:
			return {
				...state, 
				usersData: state.usersData.map(u=>{
					debugger;
					console.log(u.sub);
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
		default: return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});


export default usersReducer;