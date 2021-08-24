import React from 'react';
import { addPostCre, updatePostCre } from '../../redux/post-reducer';
import MyPage from './MyPage';
import Post from './Post/Post';
import Friend from './Friend/Friend';
import StoreContext from '../../storeContext';

const MyPageContainer = () =>{
	return <StoreContext.Consumer>
		{
			(store)=>{
				let profilePage = store.getState().profilePage;
				let dispatch = store.dispatch;
				let posts = profilePage.postsData.map(post => (<Post id={post.id} title={post.title}/>));
				let friends = profilePage.friendsData.map(friend => (<Friend name={friend.name} url={friend.url}/>));

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
					newPostText = {profilePage.newPostText}
					/>
			}	
		}
		</StoreContext.Consumer>
}

export default MyPageContainer;