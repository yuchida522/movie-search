import React, { useState, Component } from 'react';
import SearchBar from './searchBar'
import Buttons from './button'


const Homepage = () => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleInput(e) {
        const searchInput = e.target.value
        setSearchQuery(searchInput)
    };

    function searchMovies() {
        fetch(`/the-movie-db/search/${searchQuery}`)
        .then((result) => result.json())
        .then((data) => console.log(data))   
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