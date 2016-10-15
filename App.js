import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		};
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render() {
		return (
			<div>
				<Slider2 ref="red" update={this.update} />
				{this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br />
			</div>
		);
	}
}

class Slider extends React.Component {
  render(){
		return (
			<input type="range"
			min="0"
			max="255"
			onChange={this.props.update} />
		);
  }
}
class Slider2 extends React.Component {
  render(){
		return (
			<div>
				<input ref="inp" type="range"
				min="0"
				max="255"
			onChange={this.props.update} />
			</div>
		);
  }
}

export default App