import { Component } from "react";
import {} from "./ListSmile.css";

class ListSmile extends Component{

	counter = [
		{
			id:1,
			value:0,
			smile: '😄'
				},
		{
			id:2,
			value:0,
			smile: '😎'
				},
		{
			id:3,
			value:0,
			smile: '😉'
		},
		{
			id:4,
			value:0,
			smile: '😇'
		},
		{
			id:5,
			value:0,
			smile: '👌'
		}
	]; 

	constructor(props){
		super(props);
		this.state = {
			initialValue: this.counter,
		}
	}

	ClickCounter = (id) => {
	const count = this.counter.map(i => {
			if(i.id === id ){
					i.value += 1;
			}
			return i;
		})
	this.setState({...this.state, initialValue: count})
	}

	ShowResult = () =>{
	let arrValue = [];
	this.state.initialValue.map(i => {
		arrValue.push(i.value);
		});
		let win = 0;
		for (let item of arrValue){
			if(item > win){
				win = item;
			}
		}
		console.log(win);
		this.state.initialValue.map(i => {
			if (i.value === win){
				alert("Winner:" + i.smile);
			}
		})
	}
	

	render(){
		const li = this.counter.map((i) => 
			<li  key={i.id} onClick={ () => this.ClickCounter(i.id)}>{i.smile}<p>{i.value}</p></li>
			
		)
		return (
			<>
				<ul>
					{li}
				</ul>
				<button onClick={this.ShowResult}> Show Results </button>
			</>
		)
	}
}

export default ListSmile;