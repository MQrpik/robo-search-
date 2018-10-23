import React from 'react';
import 'tachyons';

const Card = (props) => {
	const {name, email, username} = props;
	return(

	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
	<img alt='zdjecie' src={`https://robohash.org/${props.id}`} />
		<div>
		<h2> {name }</h2>
			<p> {username} </p>
		<p> {email} </p>
	
		</div>
	</div>
	);
}
export default Card;