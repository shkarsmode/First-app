import React from 'react';
import { addPost, updatePost, setUserProfile } from '../../redux/post-reducer';
import MyPage from './MyPage';
import Post from './Post/Post';
import Friend from './Friend/Friend';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';

class MyPageContainer2 extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id ? this.props.match.params.id.slice(2) : this.props.id;
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(
			response => this.props.setUserProfile(response.data));

	}

	render() {
		return <MyPage
			newPostText={this.props.newPostText}
			posts={this.props.posts}
			friends={this.props.friends}
			friendsCount={this.props.friendsCount}
			updateNewPostText={this.props.updateNewPostText}
			createPost={this.props.createPost}
			userProfile={this.props.userProfile}
		/>
	}
}

let mapStateToProps = state => {
	let posts = state.profilePage.postsData.map(post =>
		<Post
			id={post.id}
			title={post.title}
			userProfile={state.profilePage.userProfile} />);

	let friends = state.profilePage.friendsData.map(friend =>
		<Friend name={friend.name} url={friend.url} />);

	return {
		newPostText: state.profilePage.newPostText,
		posts: posts,
		friends: friends,
		friendsCount: friends.length,
		userProfile: state.profilePage.userProfile,
		id: state.auth.id
	}
}

let mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => dispatch(updatePost(text)),
		createPost: (el, input) => {
			if (el.code == "Enter" && input != '')
				dispatch(addPost());
		},
		setUserProfile: data => dispatch(setUserProfile(data))
	}
}

let MyPageUrlDataContainer = withRouter(MyPageContainer2);

const MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPageUrlDataContainer);
export default MyPageContainer;