import React from 'react'
import Button from '@material-ui/core/Button';


function Buttons({children}) {
    return (
        <Button variant="contained" color="primary">
        {children}
      </Button>
    )
}

export default Buttons