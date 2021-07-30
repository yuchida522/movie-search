import React, { useState, useEffect } from 'react'
import MovieCard from './movieCard'

const SearchResults = (props) => {

    const [searchResults, setSearchResults] = useState()
    const resultsFormatted = []
    
    useEffect(() => {
        getSearchResults()
    }, [])

    async function getSearchResults(){
        const response = await fetch(`/search/${props.match.params.query}`)
        const data = await response.json()
        setSearchResults(data.results)
    }

    console.log("HERE", searchResults)
    return (
        <div>
        {searchResults && searchResults.map((result, index) => {
            return (
                <MovieCard title={result.title} image={result.image}/>
            )
        })}
        </div>
    )
}

export default SearchResults