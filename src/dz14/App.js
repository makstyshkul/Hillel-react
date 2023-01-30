import { Component } from "react";
import { renderCurrentType, treeToMap } from "./Utils";
import data from "./data.json";


class App extends Component {

	constructor() {
		super();
		this.map = treeToMap(data);
		this.state = {
			value: '',
		}
	}

	handleChange = (event) => {
		this.setState({ ...this.state, value: event.target.value });
	}

	extendFolders = () => {

		return Object.entries(this.map)
			.filter(([_, value]) => value.startsWith(this.state.value))
			.map(([path]) => this.pathToArr(path))
			.flat()
	}

	pathToArr = (path) => {
		const splited = path.split('/').filter(i => !!i);
		return splited.reduce((accum, current) => {
			const last = accum[accum.length - 1];
			if (last) {
				return [...accum, last + "/" + current];
			}
			return [...accum, '/' + current];
		}, [])
	}

	render() {
		//console.log(this.extendFolders()) 
		return (
			<>
				<input placeholder="type me" onChange={this.handleChange}  value={this.state.value}/>
				{/* <button onClick={this.handleChange} value={this.state.value}>Show</button> */}
				<ul>
					{renderCurrentType(data, this.extendFolders())}
				</ul>
			</>
		);
	}
}
export default App;