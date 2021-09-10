import {connect} from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from '../../redux/users-reducer';

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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default FriendsContainer;