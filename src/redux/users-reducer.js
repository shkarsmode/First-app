const initialState = {
		friendsData: [
			{id: 10, name: 'Alyona Sumskaya', url: 'https://picsum.photos/236'},
			{id: 11, name: 'Alexey Kurko', url: 'https://picsum.photos/225'},
			{id: 15, name: 'Roha Zaika', url: 'https://picsum.photos/215'}
		],
		newFriends: [
			{id: 25, name: 'Dmitriy Bondarenko', url: 'https://picsum.photos/200'}
		]
};

const usersReducer = (state = initialState, action)=>{
	switch(action.type){
		// case ADD_MESSAGE: 
		// 	return{
		// 		state
		// 	}
		// case UPDATE_MESSAGE: 
		// 	 return {
		// 		state
		// 	}
		default: return state;
	}
}

export default usersReducer;