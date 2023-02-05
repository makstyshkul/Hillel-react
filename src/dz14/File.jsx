import { Component } from "react";


class File extends Component  {
	constructor(){
		super();
	}

	render(){
		return(
			<li>
				{this.props.name} {this.props.mime}
			</li>
		)}
}

	export default File;

