import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonAppBar from "./Components/appBar";
import MediaCard from "./Components/houses";
import SimpleBottomNavigation from "./Components/bottomBar";

// function App() {
//   return (
//     <div className="App">
//      <input type="text"></input>
//     </div>
//   );
// }
const Houses = {
  height:'80%',
  margin: '10px',
  overflowY:'scroll'
};

const app__container = {
  background:'#f4f4f4',
  position:"absolute",
  height:'100%',
  width:'100%',
  overflow:'hidden'
}



function App(){
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     username:'',
  //     password:'',
  //     requirements: [
  //       {
  //         title:'FIrst House',
  //         location:'Aurandalpet, Guntur',
  //         sqft:3200,
  //         bedrooms:2
  //         },
  //         {
  //           title:'Second House',
  //           location:'Nallacheruvu, Guntur',
  //           sqft:5000,
  //           bedrooms:4
  //           }
  //     ]
  //   }


  //   this.changeState = this.changeState.bind(this);
  // }
  

    // changeState(e){
    //   // e.preveDefault();
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //     [e.target.name]: e.target.value
    //   })
    //   console.log(this.state);
    // }

    // handleChange = (event) => {
    //   this.setState({
    //     [event.target.name]:event.target.value
    //   })

    //   console.log(this.state);
    // }

    // handleSubmit = (event) => {
    //   event.preventDefault();
    //   const {username, password} = this.state;
    //   console.log(`Username: ${username}  Password: ${password}`); 
    // }
  const [posts, setPosts] = useState([
        {
        title:'FIrst House',
        location:'Aurandalpet, Guntur',
        sqft:3200,
        bedrooms:2,
        imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
        },
        {
          title:'Second House',
          location:'Nallacheruvu, Guntur',
          sqft:5000,
          bedrooms:4,
          imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
        },
        {
          title:'Third House',
          location:'Amaravathi road, Guntur',
          sqft:2500,
          bedrooms:3,
          imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
        }
  ])

  return(
    <div style={app__container}>

      <ButtonAppBar></ButtonAppBar>
      <div style={Houses} className="houses">
        {
        posts.map(post => {
           return <MediaCard title={post.title} location={post.location} sqft={post.sqft} bedrooms={post.bedrooms} imageUrl={post.imageUrl}></MediaCard>
        })
        }
      
      </div>

      <div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    {/* <div className="Container">
      <form onSubmit={this.handleSubmit}>
    <input type="text" onChange={this.handleChange} name="username" placeholder={this.state.username} value={this.state.username} />
    <br />
    <input type="text" onChange={this.handleChange} name="password" placeholder={this.state.password} value={this.state.password} />
    <br />
    <Button variant="contained" color="primary" style={{borderRadius:50}} onClick={this.handleSubmit}>Save</Button>
    </form>

  <h3>{this.state.username}</h3>
    </div> */}


    </div>
  )
}

export default App;
