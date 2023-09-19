import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import Items from './components/Items';
import Categories from './components/Categories';




class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			items: [
				{
					id: 1,
					title: 'GTA',
					img: 'gta.jpg',
					desc: 'Just WOW, the best game let`s gooooo, or loser?',
					category: 'nolife',
					price: '100k',
				},
				{
					id: 2,
					title: 'The Last of Us',
					img: 'TLofU.jpeg',
					desc: 'Just WOW, the best game let`s gooooo, or loser?',
					category: 'nolife',
					price: '150k',
				},
				{
					id: 3,
					title: 'The Witcher',
					img: 'widmak.jpg',
					desc: 'Just WOW, the best game let`s gooooo, or loser?',
					category: 'nomoney',
					price: '200k',
				},
				{
					id: 4,
					title: 'God of War',
					img: 'godwar.jpg',
					desc: 'Just WOW, the best game let`s gooooo, or loser?',
					category: 'time for war',
					price: '170k',
				},
				{
					id: 5,
					title: 'Battlefield',
					img: 'batt.jpg',
					desc: 'Just WOW, the best game let`s gooooo, or loser?',
					category: 'life',
					price: '10k',
				},

			]
		}
		this.addTooOrder = this.addTooOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
	}
	render() {
		return (
			<div className="wrapper">
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />

				<Categories />

				<Items items={this.state.items} onAdd={this.addTooOrder} />

				<Footer />
			</div>
		)
	}


	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}


	addTooOrder(item) {
		let isInAray = false;
		this.state.orders.forEach(el => {
			if (el.id === item.id) {
				isInAray = true
			}
		})
		if (!isInAray) {
			this.setState({ orders: [...this.state.orders, item] })
		}
	}
}

export default App;
