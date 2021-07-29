import React, { useState, useEffect } from 'react'

const SearchResults = (props) => {

    const [searchResults, setSearchResults] = useState({})
    
    console.log(props)
    useEffect(() => {
        getSearchResults()
    }, [])

    function getSearchResults(){
        fetch(`/search/${props.match.params.query}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results))
    }

    console.log("HERE", searchResults)
    return (
        <div>
        <p>This is the search results page</p>
        </div>
    )
}

export default SearchResults