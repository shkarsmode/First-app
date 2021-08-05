import React from 'react';
import d from './Dialogs.module.css';
import Messege from './Messege';

const Dialogs = () =>{
	return(
		<div className={d.wrap}>
			<Messege name='Vitalya Grudkin' url='https://sun6-21.userapi.com/s/v1/ig2/SI1A798_pthScrGRkZCxEB4D043GniGk_YSClHzTs2rNRkznkfdOszD6ek33bvUc45Er2ghnLSvDi-t-Ej_iCEnd.jpg?size=50x0&quality=96&crop=96,96,768,768&ava=1'/>
			<Messege name='Maks Barishov' url='https://sun6-21.userapi.com/s/v1/ig1/B5EgucLMdYcVwnurQ_B6u1pLIXQsW-ZlfPuGlqKJXVTVB2Z0Mydy6_c37cHgW69lDdsx-tWW.jpg?size=50x0&quality=96&crop=275,101,470,470&ava=1' />
		</div>
	);
}

export default Dialogs; 