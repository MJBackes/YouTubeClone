import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <div id="SearchFormContainer">
            <form onSubmit = {(event) => props.onSubmit(event)} >
                <input
                    type="text"
                    placeholder="Search..."
                    id="searchInput"
                />
                <button
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;