import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {

	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
			response => {
				this.props.setUsersAc(response.data.items, response.data.totalCount)
			});
	}

	onPageChanged = p => {
		this.props.setCurrentPageAc(p);
		if(this.props.currentPage != p)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
				response => this.props.setUsersAc(response.data.items, response.data.totalCount));
	}

	pages = [];

	render() {
		return <Users users = {this.props.users}
									usersData = {this.props.usersData}
									pageSize = {this.props.pageSize}
									totalUsersCount = {this.props.totalUsersCount}
									currentPage = {this.props.currentPage}
									followAc = {this.props.followAc}
									unfollowAc = {this.props.unfollowAc}
									setUsersAc = {this.props.setUsersAc}
									onPageChanged = {this.onPageChanged}
									pages = {this.pages}
						/>
	}
}

let usersData;
let mapStateToProps = (state)=>{
	usersData = state.usersPage.usersData;
	let users = state.usersPage.newFriends[0];
	return{
		users: users,
		usersData: usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = (dispatch)=>{
	return {
		followAc: id => dispatch(followAC(id)),
		unfollowAc: id => dispatch(unfollowAC(id)),
		setUsersAc: (users, count) => dispatch(setUsersAC(users, count)),
		setCurrentPageAc: page => dispatch(setCurrentPageAC(page))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
