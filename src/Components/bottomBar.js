import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AdjustIcon from '@material-ui/icons/Adjust'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom:0,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  }

  return (
  
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
 
 );
}

export default SimpleBottomNavigation;
