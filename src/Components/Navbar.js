import React, { useEffect, useState } from 'react'
import '../CSS/Navbar.css';

function Navbar() {

	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', null);
		};
	
	}, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
        <img
		    className='navbar__logo'
			src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1280px-Logonetflix.png'     
			alt='Netflix Logo'
		/>
		
        <img
		    className='navbar__avatar'
			src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'     
			alt='Netflix Avatar'
		/>
    </div>
  )
}

export default Navbar