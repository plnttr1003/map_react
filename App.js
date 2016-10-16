import React from 'react';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{id: 1, name: "Simon Bailey"},
				{id: 2, name: "Masha Bailey"},
				{id: 3, name: "Kasha Bailey"},
				{id: 4, name: "Katya Bailey"},
				{id: 5, name: "Ivan Bailey"},
				{id: 6, name: "123 Bailey"},
				{id: 7, name: "Sasha Bailey"},
				{id: 8, name: "Simon8 Bailey"},
				{id: 9, name: "Simon9 Bailey"},
				{id: 10, name: "Simon10 Bailey"},
				{id: 11, name: "Simon11 Bailey"},
				{id: 12, name: "Simon12 Bailey"},
				{id: 13, name: "Simon13 Bailey"},
				{id: 14, name: "Simon14 Bailey"},
				{id: 15, name: "Simon15 Bailey"},
				{id: 16, name: "Simon16 Bailey"},
				{id: 17, name: "Simon17 Bailey"},
				{id: 18, name: "Petr Bailey"}
			]}
		}
	render() {
		let rows = this.state.data.map(person => {
			return <PersonRow key={person.id} data={person} />
		})
		return <table>
			<tbody>{rows}</tbody>
		</table>
	}
}

const PersonRow = (props) => {
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
	</tr>
}

export default App