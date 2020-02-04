import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom' ;
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: 250,
    marginTop:"80px",
    marginBottom: theme.spacing(2),
    backgroundColor:'green',
    color:"#fff",
  },
  list: {
    width: 250,    
    fontSize: '1.25rem',
    textDecoration:'none'
  }
  }))

 


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
   
    <div
      className={classes.list}
      id="cont"
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Customers', 'Policies', 'Claims'].map((text, index) => (
          <ListItem button key={text} >     
            <Link to={`/${index+1}`}> 
            <ListItemText primary={text} />
          
            </Link>
          </ListItem>
        ))}
      </List>
    
    </div>
  
  );

            

  return (
    <div>
      <Button  onClick={toggleDrawer('left', true)}> <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton></Button>
     
      <Drawer classes={{ paper: classes.paper }} open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
     
    </div>
  );
}
