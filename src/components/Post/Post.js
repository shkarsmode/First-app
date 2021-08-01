import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
	return(
		<div className={props.id ? p.bordNone : p.wrap}>
			
		</div>
	);
}

export default Post;