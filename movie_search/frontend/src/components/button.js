import React from 'react'
import Button from '@material-ui/core/Button';


function Buttons({ children, onClick }) {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
        {children}
      </Button>
    )
}

export default Buttons