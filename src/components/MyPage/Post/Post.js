import React from 'react';
import p from './Post.module.css';

const Post = props => {
	return(
		<div className={props.id ? p.bordNone + ' ' + p.wrap : p.wrap}>
			<div className={p.img}>
				<img src="https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1" alt="" />
				<div>
					Daniil Shkarupa
					<span>29 mitunes ago</span>
				</div>
			</div>
			<div>
				{props.title}
			</div>
			<div className={p.nav}>
				<img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Elike_outline_24%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2C0H24V24H0Z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M17%2C2.9A6.43%2C6.43%2C0%2C0%2C1%2C23.4%2C9.33c0%2C3.57-1.43%2C5.36-7.45%2C10l-2.78%2C2.16a1.9%2C1.9%2C0%2C0%2C1-2.33%2C0L8.05%2C19.37C2%2C14.69.6%2C12.9.6%2C9.33A6.43%2C6.43%2C0%2C0%2C1%2C7%2C2.9a6.46%2C6.46%2C0%2C0%2C1%2C5%2C2.54A6.46%2C6.46%2C0%2C0%2C1%2C17%2C2.9ZM7%2C4.7A4.63%2C4.63%2C0%2C0%2C0%2C2.4%2C9.33c0%2C2.82%2C1.15%2C4.26%2C6.76%2C8.63l2.78%2C2.16a.1.1%2C0%2C0%2C0%2C.12%2C0L14.84%2C18c5.61-4.36%2C6.76-5.8%2C6.76-8.63A4.63%2C4.63%2C0%2C0%2C0%2C17%2C4.7c-1.56%2C0-3%2C.88-4.23%2C2.73L12%2C8.5l-.74-1.07C10%2C5.58%2C8.58%2C4.7%2C7%2C4.7Z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E" alt="" />
				<img src="data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m12.1%207.87v-3.47a1.32%201.32%200%200%201%202.17-1l8.94%207.6a1.32%201.32%200%200%201%20.15%201.86l-.15.15-8.94%207.6a1.32%201.32%200%200%201%20-2.17-1v-3.45c-4.68.11-8%201.09-9.89%202.87a1.15%201.15%200%200%201%20-1.9-1.11c1.53-6.36%205.51-9.76%2011.79-10.05zm1.8-2.42v4.2h-.9c-5.3%200-8.72%202.25-10.39%206.86%202.45-1.45%205.92-2.16%2010.39-2.16h.9v4.2l7.71-6.55z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E" alt="" />
			</div>
		</div>
	);
}

export default Post;