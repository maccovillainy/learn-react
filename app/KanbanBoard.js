import React, { Component } from 'react';
import List from './List';
class KanbanBoard extends Component{
	render(){
		return(
			<div className='app'>
				<List id='todo' title='To Do' cards={
					this.props.cards.filter(item => item.status === 'todo')
				} />
				<List id='todo' title='In progress' cards={
					this.props.cards.filter(item => item.status === 'in-progress')
				} />
				<List id='todo' title='Done' cards={
					this.props.cards.filter(item => item.status === 'done')
				} />
			</div>
		);
	}
}
export default KanbanBoard;
