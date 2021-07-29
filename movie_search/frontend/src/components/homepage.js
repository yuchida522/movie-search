import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import SearchBar from './searchBar'
import Buttons from './button'


const Homepage = () => {
    let history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    function handleInput(e) {
        const searchInput = e.target.value
        setSearchQuery(searchInput)
    };

    function searchMovies() {
        history.push(`/search-results/${searchQuery}`)
    }
    return (
        <div>
        <h1>Search movies</h1>
        <SearchBar onChange={handleInput} /> <br/>
        <Buttons onClick={searchMovies}>Find movies</Buttons>
        </div>
    );
}

export default Homepage