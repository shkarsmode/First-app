import React from 'react';
import d from './Dialogs.module.css';

const Message = (props) =>{
	return(
		<div className={d.mes}>
			<div>
				<img className={d.img} src={props.url} alt="" />
			</div>
			<div className={d.cont}>
				<div className={d.name}>
					<span>{props.name}</span>
					<span>4:53pm</span>
				</div>
				<span>Last messege</span>
			</div>
		
		</div>
	);
}

export default Message;