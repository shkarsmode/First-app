import React from 'react';
import d from './Friends.module.css';

const User = ()=> {
	return (
		<div>
			<div className={d.bottom}>
				<img className={d.img} src="https://picsum.photos/216" alt="" />
				<div className={`${d.inf} ${d.inf2}`}>
					<span className={d.name}>Alyona Sumskaya</span>
					<div className={d.buttons}><span className={d.message}>White message</span><span className={d.dot}></span><span className={d.message}>Call</span></div>
				</div>
			</div>
			<div className={d.bottom2}>
				<div></div>
			</div>
		</div>
	)
};

export default User;