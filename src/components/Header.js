import React, { useState } from 'react';
import cl from './style.css';
import { FaLuggageCart } from "react-icons/fa";
import Order from './Order';

const showOrder = (props) => {
	let summa = 0;
	props.orders.forEach(el => summa += Number.parseFloat(el.price))

	return (
		<div>
			{props.orders.map(elem => (
				<Order onDelete={props.onDelete} key={elem.id} item={elem} />
			))}
			<p className='summa'>Syma: {new Intl.NumberFormat().format(summa)}$</p>
		</div>
	)
}

const showNothing = () => {
	return (
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
