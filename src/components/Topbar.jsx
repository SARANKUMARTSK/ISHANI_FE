import React from 'react'
import logo from '/src/images/ISHANI LOGO.png'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Topbar() {
  return <>
  <div className="topbar">
    <div className="topbar-logo">
     <img src={logo} alt="" />
    </div>

    <div className="topbar_contents">
        <ul className='topbar_heading_list'>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
            <div className='subscribe_button'><FavoriteIcon/>SUBSCRIBE</div>
        </ul>
    </div>
  </div>
  </>
}

export default Topbar