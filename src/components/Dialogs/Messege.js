import React from 'react';
import d from './Dialogs.module.css';

const Messege = (props) =>{
	return(
		<div>
			<div>
				<img src={props.url} alt="" />
			</div>
			<div>
				{props.name}
				<span>Last messege</span>
			</div>
		
		</div>
	);
}

export default Messege;