import React, { Component } from 'react';
import cl from './style.css';

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Vse'
				},
				{
					key: 'nolife',
					name: 'Nezija'
				},
				{
					key: 'life',
					name: 'Ziza'
				},
				{
					key: 'time for war',
					name: 'GOD'
				},
				{
					key: 'nomoney',
					name: 'Bez deneg'
				},

			]
		}
	}


	render() {
		return (
			<div className='categories'>
				{this.state.categories.map(elem => (
					<div key={elem.key} onClick={() => this.props.chooseCategory(elem.key)}>{elem.name}</div>
				))}
			</div>
		)
	}
}

export default Categories