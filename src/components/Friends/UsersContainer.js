import React from 'react';
import {connect} from 'react-redux';
import UsersOthers from './UsersOthers';
import Users from './Users';

let mapStateToProps = (state)=>{
	let usersData = state.usersPage.usersData.map(el => (<UsersOthers name={el.name} url={el.url} sub={el.sub} years={el.years}/>));;
	let users = state.usersPage.newFriends[0];
	return{
		users: users,
		usersData: usersData
	}
}

const FriendsContainer = connect(mapStateToProps)(Users);


export default FriendsContainer;