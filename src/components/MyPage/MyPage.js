import React from 'react';
import p from './MyPage.module.css';
import Post from '../Post/Post';

const MyPage = () =>{
	return(
	<div className={p.content}>
		<div className={p.left}>
			<div className={`${p.img} ${p.block}`}>
				img
			</div>
			<div className={p.friends}>
				friends
			</div>
		</div>
		<div className={p.right}>
			<div className={`${p.descr} ${p.block}`}>
				Daniil Shkarupa
			</div>
			<div className={`${p.post} ${p.block}`}>
				What's new?
			</div>
			<div className={`${p.posts} ${p.block}`}>
				<Post title='first'/>
				<Post title='Second'/>
			</div>
		</div>
	</div>
);
}

export default MyPage;