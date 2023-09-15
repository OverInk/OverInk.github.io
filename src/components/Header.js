import React, { useState } from 'react';
import cl from './style.css';
import { FaLuggageCart } from "react-icons/fa";

export default function Header() {
	let [cardOpen, setCardOpen] = useState(false);

	return (
		<header>
			<div>
				<div className='logo'>Home Staff <span className='new-font'>Off</span>
					<ul className='nav'>
						<li>NO about yourself</li>
						<li>Contankts</li>
						<li>KabiNET</li>
					</ul>
					<FaLuggageCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className='shop-card-button' />
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
