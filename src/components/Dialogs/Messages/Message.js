import React from 'react';
import m from './Messages.module.css';

const Message = props => {
	return <div className={m.wrapMes}>
		<img className={m.img2} src={props.url} alt="" />
		<div className={m.name}>
			<div>{props.name} <span>4:07 pm</span></div>
			<div>{props.mess}</div>
		</div>
	</div>
}

export default Message;