import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button'
import logo from '../icons/logo.PNG';
import close from '../icons/close.PNG';
import hamburger from '../icons/hamburger.PNG';
import './Navbar.css';

function Navbar() {
  const [click,setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <=960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className ='navbar'>
        <div className = 'navbar-container'>
          <Link to = '/' className = 'navbar-logo' onClick={closeMobileMenu}>
            <img src = {logo} className = 'logo' alt = 'logo'/>
          </Link>
          <div className = 'menu-icon' onClick = {handleClick}>
            <img src = {click ? close: hamburger} className = 'hamburger' alt = "nav menu"/>
          </div>
          <ul className = {click ? 'nav-menu active': 'nav-menu'}>
            <li className = 'nav-item'>
              <Link to ='/' className = 'nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to ='/services' className = 'nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to ='/products' className = 'nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to ='/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar