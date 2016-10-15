import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render() {
		let txt = this.props.txt
		let txt1 = this.props.txt
		return <h1>По умолчанию: {txt1} Текст: {txt} Число: {this.props.cat}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt1: 'this is the default txt'
}

ReactDOM.render(
	<App cat={5} txt="this is props text 123"/>,
	document.getElementById('app')
);