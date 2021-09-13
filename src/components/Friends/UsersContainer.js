import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetchingAC } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetchingAC(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
			response => {
				this.props.toggleIsFetchingAC(false);
				this.props.setUsersAc(response.data.items, response.data.totalCount);
			});
	}

	onPageChanged = p => {
		this.props.toggleIsFetchingAC(true);
		this.props.setCurrentPageAc(p);
		if (this.props.currentPage != p)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
				response => {
					this.props.toggleIsFetchingAC(false);
					this.props.setUsersAc(response.data.items, response.data.totalCount);
				});
	}

	pages = [];
	render() {
		return <Users users={this.props.users}
			usersData={this.props.usersData}
			pageSize={this.props.pageSize}
			totalUsersCount={this.props.totalUsersCount}
			currentPage={this.props.currentPage}
			followAc={this.props.followAc}
			unfollowAc={this.props.unfollowAc}
			setUsersAc={this.props.setUsersAc}
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

let mapDispatchToProps = dispatch => {
	return {
		followAc: id => dispatch(followAC(id)),
		unfollowAc: id => dispatch(unfollowAC(id)),
		setUsersAc: (users, count) => dispatch(setUsersAC(users, count)),
		setCurrentPageAc: page => dispatch(setCurrentPageAC(page)),
		toggleIsFetchingAC: bool => dispatch(toggleIsFetchingAC(bool))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
