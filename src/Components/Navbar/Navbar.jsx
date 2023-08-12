import React, {useState} from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  //function to toggle navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  //function to close navbar
  const removeNavbar = () => {
    setActive('navBar')
  }
  return (
    <div>
      <section className='navBarSecion'>
        <header className="header flex">
          <div className="logoDiv">
            <a href="" className="logo">
              <h1><MdTravelExplore className='icon'/>Travel.</h1>
            </a>
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Packages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Shop</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">News</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>

              <button className='btn'>
                <a href='#'>BOOK NOW!</a>
              </button>
            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
          </div>
        </header>
      </section>
      
    </div>
  )
}

export default Navbar
