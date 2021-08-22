import React from 'react';
import { addPostCre, updatePostCre } from '../../redux/post-reducer';
import MyPage from './MyPage';
import Post from './Post/Post';
import Friend from './Friend/Friend';


const MyPageContainer = (props) =>{
	let posts = props.state.postsData.map(post => (<Post id={post.id} title={post.title} />));
  let friends = props.state.friendsData.map(friend => (<Friend name={friend.name} url={friend.url}/>));

	let createPost = (el, input)=>{
		if(el.code == "Enter" && input != '')
			props.dispatch(addPostCre());
	}
	let updatePost = (text)=> props.dispatch(updatePostCre(text));
	
	return <MyPage 
		updateNewPostText = {text => updatePost(text)}
		createPost = {el => createPost(el)} 
		posts = {posts}
		friends = {friends}
		newPostText = {props.state.newPostText}/>
}

export default MyPageContainer;