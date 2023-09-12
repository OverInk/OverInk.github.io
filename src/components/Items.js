import React, { Component } from 'react'

export class Items extends Component {
	render() {
		return (
			<main>
				{this.props.items.map(element => (
					<h1>{element.title}</h1>
				))}
			</main>
		)
	}
}

export default Items