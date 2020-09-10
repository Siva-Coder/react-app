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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginBottom: 20,
    // flexGrow: 1
  },
  media: {
    height: 200,
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
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title__price:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
   
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent >
          <div className={classes.title__price} >
          <Typography gutterBottom variant="h6" component="h2">
                {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
                ₹{props.price}
          </Typography>
          </div>

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
        <Button variant="contained" size="medium" style={{borderRadius:50,float:'right',marginBottom:5}} color="primary" >
          View Details
        </Button>
      </CardActions>
    </Card>
    
        </Grid>

      


   
// </div>
  );
}
