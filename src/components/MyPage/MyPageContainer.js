import React from 'react';
import { addPostCre, updatePostCre } from '../../redux/post-reducer';
import MyPage from './MyPage';
import Post from './Post/Post';
import Friend from './Friend/Friend';
import StoreContext from '../../storeContext';

const MyPageContainer = () =>{
	return <StoreContext>{
			(store)=>{
				let state = store.getState();
				let dispatch = store.dispatch;
				let posts = state.postsData.map(post => (<Post id={post.id} title={post.title} />));
				let friends = state.friendsData.map(friend => (<Friend name={friend.name} url={friend.url}/>));

				let createPost = (el, input)=>{
					if(el.code == "Enter" && input != '')
						dispatch(addPostCre());
				}
				let updatePost = (text)=> dispatch(updatePostCre(text));
				
				return <MyPage 
					updateNewPostText = {updatePost}
					createPost = {createPost} 
					posts = {posts}
					friends = {friends}
					newPostText = {state.newPostText}
					/>
			}	
		}</StoreContext>
}

export default MyPageContainer;