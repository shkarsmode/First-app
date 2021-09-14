import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
			response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items, response.data.totalCount);
			});
	}

	onPageChanged = p => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(p);
		if (this.props.currentPage != p)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
				response => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.data.items, response.data.totalCount);
				});
	}

	pages = [];
	render() {
		return <Users users={this.props.users}
			usersData={this.props.usersData}
			pageSize={this.props.pageSize}
			totalUsersCount={this.props.totalUsersCount}
			currentPage={this.props.currentPage}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			setUsers={this.props.setUsers}
			onPageChanged={this.onPageChanged}
			pages={this.pages}
			isFetching={this.props.isFetching}
		/>
	}
}

let usersData;
let mapStateToProps = state => {
	usersData = state.usersPage.usersData;
	let users = state.usersPage.newFriends[0];
	return {
		users: users,
		usersData: usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

// let mapDispatchToProps = dispatch => {
// 	return {
// 		follow: id => dispatch(followAC(id)),
// 		unfollow: id => dispatch(unfollowAC(id)),
// 		setUsers: (users, count) => dispatch(setUsersAC(users, count)),
// 		setCurrentPage: page => dispatch(setCurrentPageAC(page)),
// 		toggleIsFetching: bool => dispatch(toggleIsFetchingAC(bool))
// 	}
// }

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	toggleIsFetching
})(UsersContainer);
