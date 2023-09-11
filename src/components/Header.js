import React from 'react';
import cl from './style.css';

export default function Header() {
	return (
		<header>
			<div>
				<div className='logo'>Home Staff <span className='new-font'>Off</span>
					<ul className='nav'>
						<li>NO about yourself</li>
						<li>Contankts</li>
						<li>KabiNET</li>
					</ul>
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
