import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li className='head'>BMI Calculator</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;