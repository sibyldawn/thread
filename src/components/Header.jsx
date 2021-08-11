import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useLocation,useHistory} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        margin:'auto',
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
  }
}));



export default function ButtonAppBar() {
    let history = useHistory();
  let location = useLocation();
  const classes = useStyles();
  console.log("LOCATION", location.pathname)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {location.pathname !== '/' && 
        <Button edge="start" onClick={()=> history.push("/")} color="inherit">
        Back
      </Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

