import React from 'react';
class App extends React.Component {
	render() {
		return <Button>I <Heart/> React</Button>
  }
}
class Button extends React.Component {
	render() {
		return <button>{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart">2</span>

export default App