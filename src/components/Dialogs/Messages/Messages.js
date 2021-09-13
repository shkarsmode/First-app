import React from 'react';
import m from './Messages.module.css';

const Messages = props => {
	let content = React.createRef();
	// window.onresize = () => props.onloadOnresize(content);
	// window.onload = () => props.onloadOnresize(content);

	let messages = props.messages;

	let input = React.createRef();
	let sendMessage = () => props.sendMessage(input.current.value);
	let sendMessage2 = el => props.sendMessage2(el, input.current.value);
	let updateMessage = () => props.updateMessage(input.current.value);

	return <div className={m.wrap}>
		<div className={m.top}>
			<div>Back</div>
			<div className="">Vitalya Grudkin</div>
			<img className={m.img} src="https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1" alt="" />
		</div>
		<div className={m.content} ref={content}>
			<div id='scroll'>
				<span>today</span>
				{messages}
			</div>
		</div>
		<div className={m.send}>
			<input className={m.input} onChange={updateMessage} value={props.newMessageText} onKeyDown={sendMessage2} ref={input} type="text" placeholder='White a message...' />
			<div>
				<svg onClick={sendMessage} className={m.svg}>
				</svg>
			</div>
		</div>
	</div>
}

// function scrollDown(){
// 	scroll.scrollIntoView({block: "end"});
// }

export default Messages;



