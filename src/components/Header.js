import React, { useState } from 'react';
import cl from './style.css';
import { FaLuggageCart } from "react-icons/fa";
import Order from './Order';

const showOrder = (props) => {
	return(
		<div>
			{props.orders.map(elem => (
				<Order key={elem.id} item={elem} />
			))}
		</div>
	)
}

const showNothing =() => {
	return(
		<div className='empty'>
			<h2>Tovar ne naiden</h2>
		</div>
	)
}

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
							{props.orders.length > 0 ?
								showOrder(props) : showNothing()
							}
						</div>
					)}
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
