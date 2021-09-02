import React from 'react';
import d from './Friends.module.css';

const User = props => {
	console.log(props);
	return <div className={d.wrap2}>
			<div className={d.bottom}>
				<img className={d.img} src={props.url} alt="" />
				<div className={`${d.inf} ${d.inf2}`}>
					<span className={d.name}>{props.name}</span>
					<div className={d.buttons}><span className={d.message}>Write message</span><span className={d.dot}></span><span className={d.message}>Call</span></div>
				</div>
			</div>
			<div className={d.bottom2}><div className={d.findlast}></div></div>
		</div>
}

export default User;