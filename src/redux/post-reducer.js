const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const postReducer = (state, action)=>{
	switch(action.type){
		case ADD_POST: let newPosts = {id: 5, title: state.newPostText};
			state.postsData.push(newPosts);
			state.newPostText = ''; break;
		case UPDATE_POST_TEXT: state.newPostText = action.text; break;
	}
	return state;
}

export let addPostCre = ()=>({type: ADD_POST});
export let updatePostCre = (text)=>({type: UPDATE_POST_TEXT, text: text});

export default postReducer;

