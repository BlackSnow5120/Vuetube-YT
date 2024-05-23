import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import jack_img from '../../assets/jack.png'
import { Link, useParams } from 'react-router-dom'
import { isGet } from '../CustData/Cust'



const Navbar = ({ setSidebar }) => {


    const {num} = useParams();
    console.log(num);
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={logo} alt="" className="logo" onClick={()=>{location.href="/"+num}}/>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="nav-right flex-div">
                <h1>Welcome, {isGet(num)}</h1>
            </div>
  
        </nav>
    )
}

export default Navbar
