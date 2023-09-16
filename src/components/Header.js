import React, { useState } from 'react';
import cl from './style.css';
import { FaLuggageCart } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
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
					<FaLuggageCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`} />


					{cardOpen && (
						<div className='shop-card'>
							{props.orders.map(elem => (
								<Order key={elem.id} item={elem} />
							))}
						</div>
					)}
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
