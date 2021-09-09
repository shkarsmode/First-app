import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Friends.module.css';
import avatar from '../../avatar.png';

class Users extends React.Component {

	componentDidMount(){
		axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1300').then(
			response => this.props.setUsersAc(response.data.items));
	}

	render() {
		let pagesCount = this.props.totalUsersCount / this.props.pageSize;
		let pages = [];
		for(let i = 1; i <= pagesCount; i++)
			pages.push(i);
		console.log(pages);
		return (
			<div className={d.wrap}>
				{pages.map(p => {
					return <span className>{p}</span> // PAGINATION
				})}
				<div className={d.first}>
					<div className={d.block}>
						<div className={d.top}>
							<span>Friend requests <span className={d.req}>346</span></span>
							<span className={d.show}>Show all </span>
						</div>
						<div className={d.bottom}>
							<img className={d.img} src={this.props.users.url} alt="" />
							<div className={d.inf}>
								<span className={d.name}>{this.props.users.name}</span>
								<span className={d.mutual}>{this.props.users.name} and 8 others mutual friends</span>
								<div className={d.buttons}><button className={d.sub}>Accept request</button><button className={d.des}>Keep as follower</button></div>
							</div>
						</div>
					</div>
					<div className={d.block2}>
						<div className={d.top}>
							<div className={d.all_online}>
								<span className={d.active}>Other users</span>
							</div>
						</div>
						<div className={d.center}>
							<div className={`${d.mes} ${d.mesMain}`}>
							<svg className={d.svg} version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512"><g><path d="m495,466.1l-119.2-119.2c29.1-35.5 46.5-80.8 46.5-130.3 0-113.5-92.1-205.6-205.6-205.6-113.6,0-205.7,92.1-205.7,205.7s92.1,205.7 205.7,205.7c49.4,0 94.8-17.4 130.3-46.5l119.1,119.1c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9zm-443.2-249.4c-1.42109e-14-91 73.8-164.8 164.8-164.8 91,0 164.8,73.8 164.8,164.8s-73.8,164.8-164.8,164.8c-91,0-164.8-73.8-164.8-164.8z"></path></g></svg>
								<input placeholder="Search" className={d.inp} />
							</div>
						</div>
						<div className={d.friends}>
						{
							this.props.usersData.map(el => (
								<div className={d.wrap2}>
									<div className={d.bottom}>
										<img className={d.img} src={
											!el.photos.small ? avatar : el.photos.small
										}
											alt="" />
										<div className={`${d.inf} ${d.inf2}`}>
											<span className={d.name}>{el.name}</span>
											<div className={`${d.buttons} ${d.flex}`}>
												<span className={d.message}>15 years old</span>
												{
													!el.sub ? 
													<button onClick={() => this.props.followAc(el.id)} className={`${d.sub} ${d.sub2}`}>Add friend</button> :
													<button onClick={() => this.props.unfollowAc(el.id)} className={`${d.sub} ${d.sub2} ${d.foll}`}>Following</button>	
												}
											</div>
										</div>
									</div>
									<div className={d.bottom2}><div className={d.findlast}></div></div>
								</div>
							))}
					</div>
					</div>
				</div>
				<div className={d.second}>
					<NavLink to='/friends'><div>My friends</div></NavLink>
					<div>Friend requests</div>
					<div className={`${d.active} ${d.active2}`}>Find friends</div>
				</div>
			</div>
		)
	}
}
export default Users;