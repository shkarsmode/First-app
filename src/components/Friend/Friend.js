import React from 'react';
import f from './Friend.module.css';

const Friend = (props) =>{
	return(
		<div className={f.block}>
			<img className={f.img} src={props.url} alt="" />
			<span>{props.name}</span>
		</div>
	);
}

export default Friend;