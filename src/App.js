import React, { Component, useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonAppBar from "./Components/appBar";
import MediaCard from "./Components/houses";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';



import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AdjustIcon from '@material-ui/icons/Adjust';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//Firebase
import { db, auth, storage, firebaseApp } from "./firebase";

// function App() {
//   return (
//     <div className="App">
//      <input type="text"></input>
//     </div>
//   );
// }



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    bottom:0,
    borderRadius:'40px 40px 0 0'
  },
  app__container: {
    background:'#f4f4f4',
    margin:0,
    padding:0,
    position:"absolute",
    height:'100%',
    width:'100%',
    overflowY:'hidden'
  },
  progress_container: {
    margin:0,
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflow:'hidden'
  },
}));

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

const Houses = {
  position:'absolute',
  height:'90%',
  width:'100%',
  padding:0,
  margin: 0,
  overflowY:'scroll',
  background:'#f4f4f4'
}

function App(){
  
  const [posts, setPosts] = useState([
        // {
        // title:'FIrst House',
        // location:'Aurandalpet, Guntur',
        // sqft:3200,
        // bedrooms:2,
        // price: '10,000',
        // imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
        // },
        // {
        //   title:'Second House',
        //   location:'Nallacheruvu, Guntur',
        //   sqft:5000,
        //   bedrooms:4,
        //   price: '20,000',
        //   imageUrl:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
        // },
        // {
        //   title:'Third House',
        //   location:'Amaravathi road, Guntur',
        //   sqft:2500,
        //   bedrooms:3,
        //   price: '8,000',
        //   imageUrl:"https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg"
        // },
        // {
        //   title:'Fourth House',
        //   location:'Madhapur, HYD',
        //   sqft:6000,
        //   bedrooms:3,
        //   price: '17,000',
        //   imageUrl:"https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
        // }
  ])
  const [items, setItems] = useState([]);
  const [isHouseLoaded, setIsHouseLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  //useEffect --> runs a piece of code with specific condition
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
      console.log(authUser);
    } 
    else {
      //User Logged out
      setUser(null);
    }
  })
  return () => {
    unsubscribe();
  }
  }, [user, username]);

  useEffect(() => {

    const posts = firebaseApp.database().ref('posts');
    posts.on('value', snapshot => {
      // setItems(snapshot.id);
      let data = snapshot.val();
      data.map(id => console.log(id))
      if (data.length > 0) {
        setIsHouseLoaded(true);
      }
      setPosts(data);
    });
    // db.collection('posts').onSnapshot(snapshot => {
    //   snapshot.docs.map(doc => console.log( "Hey" + doc.data() ) );
    // })
  }, [])


  //Form Submition
 function register(e){
   e.preventDefault();

   auth.createUserWithEmailAndPassword(email, password)
   .then((authUser) => {
    return authUser.user.updateProfile({
      displayName: username
    })
   })
   .catch(error => alert(error));
   console.log("Username: "+username + "  Pass: "+password+ "  Email: "+email);
 }


  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const content = () => {
    switch(true) {
      case isHouseLoaded == false:
        return (
          <div className={classes.progress_container} >
          <CircularProgress />
          </div>
          );
      case isHouseLoaded == true:
        return (
   
       <Grid container spacing={1} direction="row"
  justify="space-evenly"
  alignItems="center">
        {
        posts.map((post,id) => {
          // console.log(id);
           return <MediaCard key={id} title={post.title} location={post.location} sqft={post.sqft} bedrooms={post.bedrooms} imageUrl={post.imageUrl} price={post.price}></MediaCard>
        })
        }
      </Grid>
        );
      
    }
  }

  return(
    <div className={classes.app__container} >
      <ButtonAppBar userExist={user} handleUsername={(e) => setUsername(e.target.value)} handleEmail={e=> setEmail(e.target.value)} handlePassword={e => setPassword(e.target.value)} onSubmit={register} ></ButtonAppBar>
      
      <div>

      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className="Houses"
      >

           {content()}
      
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
      boxShadow={3}
      style={{ boxShadow: '0 5px 10px rgba(154,160,185,.90), 0 15px 40px rgba(166,173,201,.2)'}}
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
