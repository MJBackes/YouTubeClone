import React from 'react';
import './Navbar.css';
import SearchForm from './SearchForm';
const Navbar = (props) => {
    return (
        <div className="NavbarContainer">
                <SearchForm onSubmit = {props.onSearchSubmit}/>
        </div>
    );
}

export default Navbar;