import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

const MovieCard = (props) => {
  console.log(props.image)
    return (
        <Card style={{ maxWidth: 345 }}>
          <CardHeader title={props.title}/>
          <CardMedia component="img" image={props.image} />
        </Card>
    )
}

export default MovieCard