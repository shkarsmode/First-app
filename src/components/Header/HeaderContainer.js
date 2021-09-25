import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData } from '../../redux/auth-reducer';

let resultCode;
class HeaderContainer2 extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		}).then(
			response => {
				if (!response.data.data.resultCode) {
					let { id, email, login } = response.data.data;
					this.props.setUserData(id, email, login);
				}
			}
		);
	}
	render() {
		return <Header
			resultCode={resultCode}
		/>
	}
}

const mapStateToProps = (state) => ({});
const HeaderContainer = connect(mapStateToProps, { setUserData })(HeaderContainer2);
export default HeaderContainer;