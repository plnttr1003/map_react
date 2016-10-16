import React from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items:['hello', 'world', 'click', 'me']};
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd() {
		var newItems = this.state.items.concat([
			prompt('Enter some text')
		]);
		this.setState({items: newItems});
	}

	handleRemove(i) {
		var newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}

	render() {
		var items = this.state.items.map((item, i) => (
			<div key={item} onClick={() => this.handleRemove(i)}>
				{item}
			</div>
		));

		return (
			<div>
				<button onClick={this.handleAdd}>Add Item</button>
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default App