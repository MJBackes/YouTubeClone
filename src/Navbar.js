import React from 'react';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className="NavbarContainer">
                <input
                    type="text"
                    placeholder="Search..."
                    id="searchInput"
                />
                <button
                    onClick={props.onClick}
                >
                    Search
                </button>
        </div>
    );
}

export default Navbar;