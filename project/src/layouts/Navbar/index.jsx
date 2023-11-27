import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };
  return (
    <div className='navbar-main-container'>
        <h2>Dazzling Demo</h2>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/shortcodes">ShortCodes</Link>
            <Link onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
                <span>About</span>
            {isAboutDropdownOpen && (
                <ul style={{width: "180px", height: "25px", display: "flex", flexDirection: "column", gap: "0"}}>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px", marginTop: "20px"}} to="/markup">Page Markup and Formatting</Link>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px"}} to="/contact">Contact Form</Link>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px"}} to="/align">Page Image Alignment</Link>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px"}} to="/clear">Clearing Floats</Link>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px"}} to="/comment">Page with comments</Link>
                    <Link style={{width: "100%", textAlign: "left", paddingLeft: "20px"}} to="/comment/disabled">Page with comments disabled</Link>
                </ul>
            )}
            </Link>
            <Link to="/languages">Languages</Link>
        </ul>
    </div>
  )
}

export default Navbar