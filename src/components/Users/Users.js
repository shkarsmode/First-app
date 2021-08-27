import React from 'react';
import d from './Users.module.css';

const Users = () => {
	return (
		<div className={d.wrap}>
			<div className={d.first}>
				<div className={d.block}>
					<div className={d.top}><span>Friend requests <span className={d.req}>346</span></span><span className={d.show}>Show all </span></div>
					<div className={d.bottom}>
						<img src="" alt="" />
						<div>
							<span>Alyona Sumskaya</span>
							<span>Alyona Sumskaya and 8 others mutual friends</span>
							<div><button>Accept request</button><button>Keep as follower</button></div>
						</div>
					</div>
				</div>
			</div>
			<div className={d.second}>
				<div className={d.active}>All chats</div>
				<div>Unread</div>
				<div>Starred messages</div>
			</div>
		</div>
	)
}

export default Users;