import axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent;