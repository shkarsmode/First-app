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

const Messages = (props) =>{
	window.onresize = function () {
		if(document.getElementsByClassName(m.content)[0] && window.innerHeight > 300) 
			document.getElementsByClassName(m.content)[0].style.height = window.innerHeight-225 + 'px';
	};

	window.onload = function() {
		if(document.getElementsByClassName(m.content)[0] && window.innerHeight > 300)
			document.getElementsByClassName(m.content)[0].style.height = window.innerHeight-225 + 'px';
	};

	let messegesData = [
		{name: 'Vitalya', mess: 'Привет, тут еще кто-то обитает?', url: 'https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'},
		{name: 'Vitalya', mess: 'Привет, тут еще кто-то обитает?', url: 'https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'},
		{name: 'Daniil', mess: 'Делаю соц-сеть!', url: 'https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1'}
	];

	let messages = messegesData.map((mess) => {
		return	<Message name={mess.name} mess={mess.mess} url={mess.url}/>
	});

	return(
		<div className={m.wrap}>
			<div className={m.top}>
				<div>Back</div>
				<div className="">Vitalya Grudkin</div>
				<img className={m.img} src="https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1" alt="" />
			</div>
				<div className={m.content}>
					<div>
						<span>today</span>
						{messages}
					</div>
				</div>
			<div className={m.send}>
				<input className={m.input} type="text" placeholder='White a message...'/>
				<div>
				<svg className={m.svg}>
					</svg>
				</div>
			</div>
		</div>
		
	);

}

export default Messages;


