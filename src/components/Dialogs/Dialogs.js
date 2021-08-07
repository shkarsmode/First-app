import React from 'react';
import d from './Dialogs.module.css';
import Message from './Message';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) =>{
	
	let dialogsElements = props.diaData.map(el => (<DiaItem id={el.id} name={el.name} url={el.url}/>));

	return(		
		<div className={d.wrap}>
			<div className={d.first}>
				<div className={`${d.mes} ${d.mesMain}`}>
					<svg className={d.svg} version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
						<g><path d="m495,466.1l-119.2-119.2c29.1-35.5 46.5-80.8 46.5-130.3 0-113.5-92.1-205.6-205.6-205.6-113.6,0-205.7,92.1-205.7,205.7s92.1,205.7 205.7,205.7c49.4,0 94.8-17.4 130.3-46.5l119.1,119.1c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9zm-443.2-249.4c-1.42109e-14-91 73.8-164.8 164.8-164.8 91,0 164.8,73.8 164.8,164.8s-73.8,164.8-164.8,164.8c-91,0-164.8-73.8-164.8-164.8z"/></g>
					</svg>
					<input placeholder='Search' className={d.inp}>
					</input>
				</div>
				{dialogsElements}
			</div>
			<div className={d.second}>
				<div className={d.active}>All chats</div>
				<div>Unread</div>
				<div>Starred messages</div>
			</div>
		</div>
	);
}

const DiaItem = (props) =>{
	return(
		<NavLink to={`/dialogs/id${props.id}`}>
			<Message name={props.name} url={props.url}/>
		</NavLink>
	);
}

export default Dialogs; 