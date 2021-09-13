import React from 'react';
import d from './Friends.module.css';

let UserLoad = props => {
	return <div className={d.wrap2}>
		<div className={d.bottom}>
			<div className={`${d.img} ${d.loadImg}`} />
			<div className={`${d.inf} ${d.inf2}`}>
				<span className={`${d.name} ${d.load}`}></span>
				<div className={`${d.buttons} ${d.flex}`}>
					<span className={`${d.message} ${d.loadSmall}`}></span>
				</div>
			</div>
		</div>
		<div className={d.bottom2}><div className={d.findlast}></div></div>
	</div>
}

export default UserLoad;