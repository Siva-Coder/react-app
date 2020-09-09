import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import SingleBedIcon from '@material-ui/icons/SingleBed';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 140,
  },
  location: {
      display:'flex',
      alignContent:'center',
      marginBottom: '10px'
  },
  typo:{
      lineHeight:1.7
  },
  flex:{
      display:'flex',
  },
  sqft:{
      display:'flex',
  },
  bedrooms:{
      display:'flex',
      marginLeft: '20px'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
                {props.title}
          </Typography>
          <div className={classes.location}>
          <LocationOnIcon /> 
          <Typography variant="body2" className={classes.typo} color="textSecondary" component="p">
                {props.location}
          </Typography>
          </div>

          <div className={classes.flex}>
            <div className={classes.sqft}>
            <SquareFootIcon /> 
            <Typography variant="body2" className={classes.typo} color="textSecondary" component="p">
                {props.sqft} sqft
            </Typography>
            </div>
            <div className={classes.bedrooms}>
                <SingleBedIcon />
                <Typography variant="body2" className={classes.typo} color="textSecondary" component="p">
                {props.bedrooms} bedrooms
                </Typography>
            </div>
          </div>

         
        </CardContent>
      </CardActionArea>
      <CardActions style={{float:'right'}}>
        <Button variant="contained" size="small" style={{borderRadius:50,float:'right',marginBottom:5}} color="primary" >
          Book Rent
        </Button>
      </CardActions>
    </Card>
  );
}
