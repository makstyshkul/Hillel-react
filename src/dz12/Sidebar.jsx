import { Component } from 'react';
import { } from './Sidebar.css'

class Sidebar extends Component {
	render() {
		return (
			<aside className='Sidebar'>
				<FirstList />
				<SecondList />
				<ThirdList />
				<footer>
					<p className='Footer'>© 2023 Google LLC</p>
				</footer>
			</aside>
		)
	}
}


class FirstList extends Component {
	render() {
		return (
			<ul className='Sidebar-firstList'>
				<li className='List-item'>
					<img className='Item-img' src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt='img'></img>
					<p className='Item-text'>Головна</p>
				</li>
				<li className='List-item'>
					<img className='Item-img' src='https://seeklogo.com/images/Y/youtube-shorts-logo-E2BF31FE28-seeklogo.com.png' alt='img'></img>
					<p className='Item-text'>YouTube Shorts</p>
				</li>
				<li className='List-item'>
					<img className='Item-img' src='https://cdn-icons-png.flaticon.com/512/2875/2875352.png' alt='img'></img>
					<p className='Item-text'>Підписки</p>
				</li>
				<p className='Line'></p>
			</ul>
		)
	}
}

class SecondList extends Component {
	render() {
		return (
			<ul className='Sidebar-secondList'>
				<li className='SecondList-item'>
					<img className='SecondList_item-img' src='https://static.thenounproject.com/png/2481186-200.png' alt='img'></img>
					<p className='SecondList_item-text'>Бібліотека</p>
				</li>
				<li className='SecondList-item'>
					<img className='SecondList_item-img' src='https://thumbs.dreamstime.com/b/history-gray-170719354.jpg' alt='img'></img>
					<p className='SecondList_item-text'>Історія</p>
				</li>
				<li className='SecondList-item'>
					<img className='SecondList_item-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGUo9F-Fk1KA69OPwEiG7Upjz5rsmPpxMic8Is26fqXHT9SE6OMinyo0PUkdYNhTljI4&usqp=CAU' alt='img'></img>
					<p className='SecondList_item-text'>Ваші відео</p>
				</li>
				<li className='SecondList-item'>
					<img className='SecondList_item-img' src='https://cdn.iconscout.com/icon/free/png-256/watch-later-1781603-1513853.png' alt='img'></img>
					<p className='SecondList_item-text'>Переглянути піз..</p>
				</li>
				<li className='SecondList-item'>
					<img className='SecondList_item-img' src='https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png' alt='img'></img>
					<p className='SecondList_item-text'>Відео, які сподо..</p>
				</li>
				<p className='Line'></p>
			</ul>
		)
	}
}

class ThirdList extends Component{
	render(){
		return(
			<div className='List'>
			<p className='List-title'>Що нового</p>
	<ul className='ThirdList'>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dak5_7rKMSEECNMpo-QMwo_1BuWsAq8Fg3DLcmpgbZ_Owk220JWLarNPCGqeRv9lhmw&usqp=CAU' alt='img'></img>
		<p className='ThirdList__item-text'>Популярне</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://img.freepik.com/premium-vector/note-icon-black-music-notes-musical-icon-symbol-tune-outline-tone-vector-flat-design-illustration_485380-334.jpg?w=2000' alt='img'></img>
		<p className='ThirdList__item-text'>Музика</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://previews.123rf.com/images/martialred/martialred1507/martialred150700874/42615284-video-clip-icono-del-arte-de-l%C3%ADnea-de-juegos-para-aplicaciones-y-sitios-web.jpg' alt='img'></img>
		<p className='ThirdList__item-text'>Фільми</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://cdn.iconscout.com/icon/free/png-256/youtube-gaming-4627159-3853350.png' alt='img'></img>
		<p className='ThirdList__item-text'>Ігри</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://yt3.ggpht.com/C02ahKw7Mtw0cfUkjOABzryhDFPfAnwvNwl8wFBUxJssXlTiNjloBw22tcx7aFzR4yuoPiqv1fc=s900-c-k-c0x00ffffff-no-rj' alt='img'></img>
		<p className='ThirdList__item-text'>Новини</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogs-Ma2hzYAnuI4XbamjNUTVRVsSheyiFY1UESkFR-cnlEtBMgqqjQbQxSd7-0t6yPlo&usqp=CAU' alt='img'></img>
		<p className='ThirdList__item-text'>Спорт</p>
		</li>
		<li className='ThirdList-item'>
		<img className='ThirdList__item-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Light_bulb_icon_light.svg/2048px-Light_bulb_icon_light.svg.png' alt='img'></img>
		<p className='ThirdList__item-text'>Навчання</p>
		</li>
	</ul>
	<p className='Line'></p>
			</div>
		)
	}
}

export default Sidebar;