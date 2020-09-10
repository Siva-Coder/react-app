import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonAppBar from "./Components/appBar";
import MediaCard from "./Components/houses";
import SimpleBottomNavigation from "./Components/bottomBar";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";



import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AdjustIcon from '@material-ui/icons/Adjust';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// function App() {
//   return (
//     <div className="App">
//      <input type="text"></input>
//     </div>
//   );
// }


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom:0,
  },
  Houses: {
    position:'absolute',
    height:'85%',
    padding:0,
    margin: '0px',
    overflow:'scroll',
    background:'#f4f4f4'
  },
  app__container: {
    background:'#f4f4f4',
    position:"absolute",
    height:'100%',
    width:'100%',
    overflow:'hidden'
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

function App(){
 
  const [posts, setPosts] = useState([
        {
        title:'FIrst House',
        location:'Aurandalpet, Guntur',
        sqft:3200,
        bedrooms:2,
        price: '10,000',
        imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
        },
        {
          title:'Second House',
          location:'Nallacheruvu, Guntur',
          sqft:5000,
          bedrooms:4,
          price: '20,000',
          imageUrl:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
          title:'Third House',
          location:'Amaravathi road, Guntur',
          sqft:2500,
          bedrooms:3,
          price: '8,000',
          imageUrl:"https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg"
        },
        {
          title:'Fourth House',
          location:'Madhapur, HYD',
          sqft:6000,
          bedrooms:3,
          price: '17,000',
          imageUrl:"https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        }
  ])

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={classes.app__container} >

      <ButtonAppBar></ButtonAppBar>

      <div>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className={classes.Houses}
      >
        <Grid container spacing={1} direction="row"
  justify="space-evenly"
  alignItems="center">
        {
        posts.map(post => {
           return <MediaCard title={post.title} location={post.location} sqft={post.sqft} bedrooms={post.bedrooms} imageUrl={post.imageUrl} price={post.price}></MediaCard>
        })
        }
      </Grid>
      </TabPanel>
      
      <TabPanel
        style={{ background: "green" }}
        value={value}
        index={1}
        dir={theme.direction}
      >
        Item Two
      </TabPanel>

      <TabPanel
        style={{ background: "blue" }}
        value={value}
        index={2}
        dir={theme.direction}
      >
        Item Three
      </TabPanel>

      <TabPanel
        style={{ background: "yellow" }}
        value={value}
        index={3}
        dir={theme.direction}
      >
        Item 4
      </TabPanel>

      {/* <SimpleBottomNavigation></SimpleBottomNavigation> */}
     
      <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="For you" icon={<AdjustIcon />} {...a11yProps(1)} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon {...a11yProps(1)} />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon {...a11yProps(1)} />} />
      <BottomNavigationAction label="More" icon={<MoreHorizIcon />} {...a11yProps(1)} />
    </BottomNavigation>
      </div>

    </div>
    //End app_Container
  )
}

export default App;
