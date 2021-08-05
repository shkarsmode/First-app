import React from 'react';
import p from './MyPage.module.css';
import Post from '../Post/Post';
import Friend from '../Friend/Friend';

const MyPage = () =>{

	let postsData = [
		{id: 1, title: 'It`s my first post!'},
		{id: 2, title: 'It`s my second post! WOW!'}
	];

	let posts = postsData.map(post => (<Post id={post.id} title={post.title} />));

	return(
	<div className={p.content}>
		<div className={p.left}>
			<div className={`${p.img} ${p.block}`}>
				<div className={p.img_inner}>
					<img src='https://sun6-23.userapi.com/s/v1/if2/ZcXrYTBCwdfoqSK8VUWqFdAkaUS3yxQMBsScFnSdcJf6dRbHJKGG6Id8fVlMG0YQz1iC_geE_LhKNJJWBoEOZppU.jpg?size=200x0&quality=96&crop=223,142,626,626&ava=1'></img>
				</div>
				<div className={p.edit}>Edit</div>
				<div className={p.spec}>
					<div className={p.spec_inner}><div className={p.svg}><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.1 19a.9.9 0 01.9-.9h18a.9.9 0 110 1.8H3a.9.9 0 01-.9-.9zM16.5 5.9a.9.9 0 110-1.8H21a.9.9 0 01.9.9v4.5a.9.9 0 11-1.8 0V7.17l-5.96 5.97a.9.9 0 01-1.28 0L9.5 9.77l-5.86 5.87a.9.9 0 11-1.28-1.28l6.5-6.5a.9.9 0 011.28 0l3.36 3.37 5.33-5.33z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg></div> Page statistics</div>
					<div className={p.spec_inner}><div className={p.svg}><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path clip-rule="evenodd" d="M12 7.1a.9.9 0 01.9.9v3.73l2.24 2.23a.9.9 0 11-1.28 1.28l-2.5-2.5a.9.9 0 01-.26-.64V8a.9.9 0 01.9-.9z" fill-rule="evenodd"></path><path d="M19 5a9.87 9.87 0 00-7-2.9 9.87 9.87 0 00-7.1 3V3a.9.9 0 00-1.8 0v4a.9.9 0 00.9.9h4a.9.9 0 000-1.8H6.45A8.07 8.07 0 0112 3.9c2.24 0 4.26.9 5.73 2.37A8.07 8.07 0 0120.1 12c0 2.24-.9 4.26-2.37 5.73A8.07 8.07 0 0112 20.1a8.06 8.06 0 01-5.2-1.9.9.9 0 00-1.16 1.39A9.86 9.86 0 0012 21.9a9.87 9.87 0 009.9-9.9c0-2.73-1.1-5.21-2.9-7z"></path></g></svg></div>Memories</div>
					<div className={p.spec_inner}><div className={p.svg}><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 3.1a4.5 4.5 0 012.35.44 3.17 3.17 0 011.31 1.31c.3.57.42 1.11.44 2.1V12a.9.9 0 01-1.8.11V8.9H3.9v5.9c0 .87.06 1.18.23 1.5.13.25.32.44.57.57.3.16.58.22 1.31.23H18.83l-1.47-1.46a.9.9 0 01-.08-1.18l.08-.1a.9.9 0 011.18-.08l.1.08 3 3a.9.9 0 01.08 1.18l-.08.1-3 3a.9.9 0 01-1.36-1.18l.08-.1 1.47-1.46H6.2c-1.07 0-1.65-.1-2.21-.37l-.14-.07a3.17 3.17 0 01-1.32-1.31 4.2 4.2 0 01-.44-2.1V7.21c0-1.16.11-1.74.44-2.35a3.17 3.17 0 011.31-1.32c.57-.3 1.11-.42 2.1-.44h.25zm0 1.8H6.2c-.88 0-1.18.06-1.5.23-.25.13-.44.32-.57.57-.16.3-.22.58-.23 1.31v.09h16.2v-.09c-.01-.73-.07-1.02-.23-1.3a1.37 1.37 0 00-.57-.58c-.3-.16-.58-.22-1.31-.23z" fill="currentColor"></path></svg></div>Money transfers</div>
				</div>
			</div>
			<div className={`${p.wrap_friends} ${p.block}`}>
				<div>Friends <span>194</span></div>
				<div className={p.friends}>
					<Friend name='Dmitry' url='https://sun6-20.userapi.com/s/v1/ig2/P-OoTYB8oSfhhp5s0rofLhlaMkEUZZguy1_MI3ueiTNr2ER3hnUk8gqzwa8Ob2yYggWMf1aPcuGP16KB6JFEgDVy.jpg?size=50x0&quality=96&crop=86,167,1459,1459&ava=1'/>
					<Friend name='Nastya' url='https://sun6-23.userapi.com/s/v1/if1/F02cNj9AJf4u6ocDSUuNPrMxuywii79FcUqbk1o8X-_LUinqLU7ZR5LpJw1O0ILOeSccf70l.jpg?size=50x0&quality=96&crop=3,287,1615,1615&ava=1'/>
					<Friend name='Vadim' url='https://sun6-22.userapi.com/s/v1/if1/glM1f85wfy0D0osBDsFleibFeciFfCt-nPKB17IOYAgxPfR4lhXVh5JaCujlOCDkdgZggM4L.jpg?size=50x0&quality=96&crop=31,47,577,577&ava=1'/>
					<Friend name='Vika' url='https://sun6-22.userapi.com/s/v1/if1/XbL2-KNcMnUqDZCF9uIgUUrj35wrnaS0QE3JhUvwOnH9FpomwaQqlrHqQ7QFwJ7byUqmUB5_.jpg?size=50x0&quality=96&crop=127,127,705,705&ava=1'/>
					<Friend name='Jeka' url='https://sun6-20.userapi.com/s/v1/if1/1N6B5MOKe2PBFHGH6OYO9euQ372yryp-kA2hTWCHvzbI8wm0iBfK9rKj8Yq_yOjHGnBzjg.jpg?size=50x0&quality=96&crop=695,215,415,415&ava=1'/>
					<Friend name='Irina' url='https://sun6-21.userapi.com/s/v1/ig2/XFOvmletk-fnKphtwjOGaWfiER5eWf0vHxtm64m70ECJUHQJ5T1dxpHGRldquv-069dmTv4wOPF843P8PsTMGern.jpg?size=50x0&quality=96&crop=13,10,2135,2135&ava=1'/>
				</div>
			</div>
		</div>
		<div className={p.right}>
			<div className={`${p.descr} ${p.block}`}>
				<div className={p.top}>
					<div className={p.name}>Daniil Shkarupa<span>last seen 10 minutes ago</span></div>
					<div className={p.status}>Set status</div>
					<div className={p.inf}>
						<table>
							<tr>
								<td>Birthday:</td>
								<td>January 9, 1991</td>
							</tr>
							<tr>
								<td>Current city:</td>
								<td>Moscow</td>
							</tr>
						</table>
						<div className={p.show_wrap}>
							<div className={p.show}>Show full information</div>
						</div>
					</div>
				</div>
				<div className={p.bottom}>
					<div className={p.count}>194<div>friends</div></div>
					<div className={p.count}>194<div>friends</div></div>
					<div className={p.count}>194<div>friends</div></div>
					<div className={p.count}>194<div>friends</div></div>
					<div className={p.count}>194<div>friends</div></div>
				</div>
			</div>
			<div className={`${p.post} ${p.block}`}>
				<img src='https://sun6-23.userapi.com/s/v1/if2/O5q4KiqYj9GmUQ8_M-7ocdXaSextWXONCFg2jb3cd3-KviAuvoEe83nQ3FhI2ncbUFqGRBquxUU4mywCX5qDLrCC.jpg?size=50x0&quality=96&crop=223,142,626,626&ava=1'></img>
				<input placeholder="What's new?"/>
			</div>
			<div className={`${p.posts} ${p.block}`}>
				<div className={p.post_top}>
					<div className={p.active}>All posts</div>
					<div>My posts</div>
					<div>Post archive</div>
				</div>
			</div>
			{posts}

		</div>
	</div>
);
}

export default MyPage;