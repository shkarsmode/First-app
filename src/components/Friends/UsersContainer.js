import React from 'react';
import {connect} from 'react-redux';
import UsersOthers from './UsersOthers';
import Users from './Users';
import {followAC, unfollowAC} from '../../redux/users-reducer';

let usersData;
let mapStateToProps = (state)=>{
	usersData = state.usersPage.usersData;
	let users = state.usersPage.newFriends[0];
	return{
		users: users
	}
}

let mapDispatchToProps = (dispatch)=>{
	let followAc = (id) => dispatch(followAC(id));
	let unfollowAc = (id) => dispatch(unfollowAC(id));
	return {
		usersData: usersData.map(el => (<UsersOthers followAc={followAc} unfollowAc={unfollowAc} id={el.id} name={el.name} url={el.url} sub={el.sub} years={el.years}/>))
	}
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default FriendsContainer;