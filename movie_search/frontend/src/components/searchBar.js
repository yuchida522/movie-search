import React from 'react'
import TextField from '@material-ui/core/TextField';

function SearchBar(props) {
    return (
        <TextField onChange={props.onChange} />
    )
}

export default SearchBar