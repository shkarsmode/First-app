import React from 'react';
import d from './Dialogs.module.css';
import Messege from './Messege';
import { NavLink } from 'react-router-dom';

const Dialogs = () =>{
	return(
		<div className={d.wrap}>
			<div className={`${d.mes} ${d.mesMain}`}>
				<svg className={d.svg} version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
					<g><path d="m495,466.1l-119.2-119.2c29.1-35.5 46.5-80.8 46.5-130.3 0-113.5-92.1-205.6-205.6-205.6-113.6,0-205.7,92.1-205.7,205.7s92.1,205.7 205.7,205.7c49.4,0 94.8-17.4 130.3-46.5l119.1,119.1c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9zm-443.2-249.4c-1.42109e-14-91 73.8-164.8 164.8-164.8 91,0 164.8,73.8 164.8,164.8s-73.8,164.8-164.8,164.8c-91,0-164.8-73.8-164.8-164.8z"/></g>
				</svg>
				<input placeholder='Search' className={d.inp}>
				</input>
			</div>

			<NavLink to='dialogs/id2'><Messege name='Vitalya Grudkin' url='https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'/></NavLink>
			<NavLink to='dialogs/id3'><Messege name='Maks Barishov' url='https://sun6-21.userapi.com/s/v1/ig1/B5EgucLMdYcVwnurQ_B6u1pLIXQsW-ZlfPuGlqKJXVTVB2Z0Mydy6_c37cHgW69lDdsx-tWW.jpg?size=50x0&quality=96&crop=275,101,470,470&ava=1' /></NavLink>
		</div>
	);
}

export default Dialogs; 