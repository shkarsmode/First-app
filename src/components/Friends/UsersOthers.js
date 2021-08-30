import React from 'react';
import d from './Friends.module.css';

const UserOthers = (props)=> {
	// let followAc = () => props.followAc(props.id);
	let unfollowAc = () => props.unfollowAc(props.id);
	return (
		<div className={d.wrap2}>
			<div className={d.bottom}>
				<img className={d.img} src={props.url} alt="" />
				<div className={`${d.inf} ${d.inf2}`}>
					<span className={d.name}>{props.name}</span>
					<div className={`${d.buttons} ${d.flex}`}>
						<span className={d.message}>{props.years} years old</span>
						{
							!props.sub ? 
							<button onClick={() => props.followAc(props.id)} className={`${d.sub} ${d.sub2}`}>Add friend</button> :
							<button onClick={unfollowAc} className={`${d.sub} ${d.sub2} ${d.foll}`}>Following</button>	
						}
					</div>
				</div>
			</div>
			<div className={d.bottom2}><div className={d.findlast}></div></div>
		</div>
	)
};

export default UserOthers;