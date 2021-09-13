import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import User from './User';

let mapStateToProps = state => {
	let friends = state.usersPage.friendsData.map(el => (<User name={el.name} url={el.url} />));;
	let users = state.usersPage.newFriends[0];
	return{
		friends: friends,
		users: users,
		friendsCount: friends.length
	}
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;