import React from 'react';
import { addPost, updatePost } from '../../redux/post-reducer';
import MyPage from './MyPage';
import Post from './Post/Post';
import Friend from './Friend/Friend';
import { connect } from 'react-redux';

let mapStateToProps = state => {
	let posts = state.profilePage.postsData.map(post => (<Post id={post.id} title={post.title} />));
	let friends = state.profilePage.friendsData.map(friend => (<Friend name={friend.name} url={friend.url} />));
	return {
		newPostText: state.profilePage.newPostText,
		posts: posts,
		friends: friends,
		friendsCount: friends.length
	}
}

let mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => dispatch(updatePost(text)),
		createPost: (el, input) => {
			if (el.code == "Enter" && input != '')
				dispatch(addPost());
		}
	}
}

const MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPage);
export default MyPageContainer;