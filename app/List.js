import React, { Component } from 'react';
import Card from './Card';

class List extends Component{
	render(){
		let cards = this.props.cards.map(card => (
			<Card id={card.id}
						title={card.title}
						discription={card.discription}
						tasks={card.tasks} />
		))	
		return(
			<div className='list'>
				<h1>{this.props.title}</h1>
				{cards}
			</div>	
		);
	}
}
export default List;
