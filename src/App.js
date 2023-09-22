import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import Items from './components/Items';
import Categories from './components/Categories';
import Showfullitem2 from './components/Showfullitem2';

import Contacts from './pages/Contacts';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],

			currentItems: [],

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

			],

			showFullItem: false,

			fullItem: {},
		}

		this.state.currentItems = this.state.items
		this.addTooOrder = this.addTooOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render() {
		return (
			<div className="wrapper">

				<Router>

					<ScrollToTop />
					<Header orders={this.state.orders} onDelete={this.deleteOrder} />

					<Categories chooseCategory={this.chooseCategory} />

					<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addTooOrder} />

					{this.state.showFullItem && <Showfullitem2 onShowItem={this.onShowItem} onAdd={this.addTooOrder} item={this.state.fullItem} />}

					<Routes>
						<Route path='/contacts' element={<Contacts />} />
					</Routes>


					<Footer />


				</Router>
			</div>
		)
	}

	onShowItem(item) {
		this.setState({ fullItem: item })
		this.setState({ showFullItem: !this.state.showFullItem })
	}


	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItems: this.state.items })
			return
		}

		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
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
