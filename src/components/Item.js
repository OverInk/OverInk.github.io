import React, { Component } from 'react';
import cl from './style.css';
import Categories from './Categories';

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<div>
					<img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
					<h2>{this.props.item.title}</h2>
					<p>{this.props.item.desc}</p>
					<b>{this.props.item.price}$</b>
					<div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
				</div>
			</div>
		)
	}
}


export default Item