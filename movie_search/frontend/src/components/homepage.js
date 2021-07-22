import React, { Component } from 'react';
import SearchBar from './searchBar'
import Buttons from './button'


function Homepage() {
    return (
        <div>
        <h1>Search movies</h1>
        <SearchBar /> <br/>
        <Buttons>Find movies</Buttons>
        </div>
    );
}

export default Homepage