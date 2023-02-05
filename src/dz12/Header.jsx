
import {Component} from 'react';
import "./Header.css"


	class Header extends Component {
		// constructor(props) {
		// 	super(props);
		// }
		render() {
		return  (
			<header className='Header'>
			<img className='Header-menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/24px-VisualEditor_-_Icon_-_Menu.svg.png' alt='menu' />
			<div className='Header-logo'>
			<a className='Header-image' href='https://www.youtube.com/'>
				<img src = 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='youTube' />
			</a>
		<p className='Heder-text'>UA</p>
		</div>
			<Input />
			<button className='Header-micro'>
				<img src='https://cdn-icons-png.flaticon.com/512/60/60955.png' alt='micro' />
			</button>
			<img className='Header-video' src='https://static.thenounproject.com/png/3191718-200.png' alt='video' />
			<img className='Header-bell' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRMVdZbY6o6Hddv3nzNZ77Hydnf8nDH0QblUVwdufE2VsWqQ0-fhtwbK2cF-yGFqtNsk&usqp=CAU' alt='bell'/>
			<img className='Header-avatar' src='https://yt3.ggpht.com/yti/AJo0G0nPSpSgs59sXowSf9AaKx8R3cui8WeEa_OdSFgG=s88-c-k-c0x00ffffff-no-rj-mo' alt='avatar'/>
			</header>
		)
		}
	}

	class Input extends Component{
		render(){
			return (
				<div className='Input'>
					<input  placeholder='Search' />
					<img  className='Input-image' src='https://www.gstatic.com/inputtools/images/tia.png' alt='keyboard' />
					<button className='Input-button'>
						<img className='Button-image' src='https://cdn-icons-png.flaticon.com/512/751/751463.png' alt='btn' />	
					</button>
				</div>
				
			)
		}
	}


	export default Header;