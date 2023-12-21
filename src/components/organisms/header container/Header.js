import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;