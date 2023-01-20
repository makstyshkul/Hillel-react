import { Component } from 'react';
import {} from "./Main.css"

class Main extends Component {
	render() {
		return (
			<main>
			<Category />
			<div className='Video'>
				<Video />
			<Video />
			<Video />
			<Video />
			</div>
			<div className='Video second-row'>
				<Video />
			<Video />
			<Video />
			<Video />
			</div>
			</main>
		)
	}
}

class Category extends Component{
	render(){
		return(
			<div className='Category'>
				<button className='Category-button'>Усі</button>
				<button className='Category-button'>Музика</button>
				<button className='Category-button'>Мікси</button>
				<button className='Category-button'>Ігри</button>
				<button className='Category-button'>Ситкоми</button>
				<button className='Category-button'>Пряма трансляція</button>
				<button className='Category-button'>Футбол</button>
				<button className='Category-button'>Спортивні відеоігри</button>
				<button className='Category-button'>Комедія</button>
				<button className='Category-button'>Нещодавні завантаження</button>
				<button className='Category-button'>Ви дивилися</button>
				<button className='Category-button'>Новинки для вас</button>
			</div>
				
		)
	}
}

class Video extends Component{
	render(){
		return (
			<div className='Video__block'>
				<iframe className='Video' width="560" height="315" src="https://www.youtube.com/embed/0dC1ds1XiJs" title="YouTube video player" 
				frameborder="0" allow="accelerometer; 
				autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
				<div className='Discription'>
					<img className='Discription-img' src='https://yt3.ggpht.com/sfPp150iI6VC5f4laY-osycP6qgKlT0YDXy47aTwG6HQncqecE36Lt7MG4o9h6L3S93tLcUb_6c=s88-c-k-c0x00ffffff-no-rj' alt='logo' />
				<div className='Discription-text'>
					<p className='Text'>ЯК ПРОЙТИ ТЕХНІЧНУ СПІВБЕСІДУ</p>
					<p className='Text'>Онлайн співбесіда на позицію верстальника</p>
					<p className='Text'>648 переглядів - 3 тижні тому</p>
				</div>
				</div>
			</div>
		)
	}
}

export default Main