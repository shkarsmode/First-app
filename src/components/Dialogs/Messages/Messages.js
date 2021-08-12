import React from 'react';
import m from './Messages.module.css';

const Message = (props) =>{
	return(
				<div className={m.wrapMes}>
					<img className={m.img2} src={props.url} alt="" />
					<div className={m.name}>
						<div>{props.name} <span>4:03 pm</span></div>
						<div>{props.mess}</div>
					</div>
				</div>
	);
}

let content = React.createRef();

const Messages = (props) =>{
	window.onresize = function () {
		if(content.current && window.innerHeight > 300) 
		content.current.style.height = window.innerHeight-225 + 'px';
	};

	window.onload = function() {
		if(content.current && window.innerHeight > 300)
		content.current.style.height = window.innerHeight-225 + 'px';	
	};

	let messages = props.mesData.messegesData.map((mess) => {
		return <Message name={mess.name} mess={mess.mess} url={mess.url}/>
	});

	let input = React.createRef();
	let sendMessage = ()=> {
		if(input.current.value != ''){
			// console.log(input.current.value);
			props.addMessage(input.current.value);
			input.current.value = '';
		}
	}

	let sendMessage2 = (el)=> {
		if(el.code == "Enter" && input.current.value != ''){
			props.addMessage(input.current.value);
			input.current.value = '';
			// scrollDown();

		} 
	}
	// function scrollDown(){
	// 	let scroll = document.querySelector('#scroll');
	// 	scroll.scrollIntoView({block: "end"});
	// 	// console.log(scroll);
	// }

	return(
		<div className={m.wrap}>
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
				<input className={m.input} onKeyDown={sendMessage2} ref={input} type="text" placeholder='White a message...'/>
				<div>
				<svg onClick={sendMessage} className={m.svg}>
					</svg>
				</div>
			</div>
		</div>
		
	);
	
}


export default Messages;



