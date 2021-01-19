import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =()=>setClick(!click);
    const closeMobileMenu =()=>setClick(false);

    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
       showButton();
    }, [])
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to="/" class="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i class="fab fa-typo3"></i>
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i class={click ? "fas fa-times" : "fa fa-bars"}></i>
                    </div>
                    <ul class={click ? "nav-menu active" : "nav-menu"}>
                    <li class="nav-item">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/">
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/services">
                            Services
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-links" onClick={closeMobileMenu} to="/products">
                            Products
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-links-mobile" onClick={closeMobileMenu} to="/sign-up">
                            Sign Up
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
