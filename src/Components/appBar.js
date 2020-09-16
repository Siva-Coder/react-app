import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
//Firebase
import { db, auth, storage, firebaseApp } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    textAlign: 'center'
  },
  form__container: {
    height: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    alignItems: 'center'
  },
  register__btn: {
    borderRadius: '50px'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


function ButtonAppBar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search location…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>

          {

                props.userExist ? <Button variant="contained" color="primary" onClick={() => auth.signOut()} >Logout</Button> : 
                <Button color="inherit" onClick={handleClickOpen} >SignUp</Button>         
          }
          
          {/* {
            props.userExist ? (
              <Button color="inherit" onClick={auth.signOut()}>Logout</Button>
            ): (
              <Button color="inherit" onClick={handleClickOpen}>Signup</Button>
            )
          } */}
        </Toolbar>
      </AppBar>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Registration
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {/* save */}
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.form__container} >
        <form noValidate autoComplete="off">
  <TextField type="text" margin="dense" id="standard-basic" label="Username" onChange={(e) => props.handleUsername(e)} />
  <TextField type="Email" margin="dense" id="standard-basic" label="Email" onChange={(e) => props.handleEmail(e)} />
  <TextField type="text" margin="dense" id="standard-basic" label="Password" onChange={(e) => props.handlePassword(e)} />
  <br></br>
  <br></br>
  <Button type="submit" color="primary" variant="contained" size="medium" className={classes.register__btn} onClick={(e) => props.onSubmit(e)} >Signup</Button>
        </form>
        </div>

      </Dialog>
    </div>
  );
}

export default ButtonAppBar;