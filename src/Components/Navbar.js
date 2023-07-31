
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button.js"
import "./Navbar.css"



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {setClick(!click); };
  const closeMobileMenu = () => {setClick(false); };

  const showButton = () => {
    if (window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <div className='relativer'>
    <nav className={click ? "navbar active" : "navbar"}>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Nived Sudhakar
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fas fa-times" :  "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Experience" className="nav-links" onClick={closeMobileMenu}>
                        Experience
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Projects" className="nav-links" onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                
            </ul>  

        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar