import React from 'react';
import Auth from "../utils/auth";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 500,
    fontSize: '2rem',
    color: "#FFFFFF"
  },

  link:{
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  link2:{
    flexGrow: 1,
    fontWeight: 300,
    fontSize: '1rem',
    color: "#FFFFFF",
    textDecoration: 'none',
  },

}));

const Navbar = () => {
  const classes = useStyles();

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Typography>
         <Button color="inherit">
          <Link to='/' onClick={() => Auth.logout()} className={classes.link2}>
             LogOut
          </Link> 
         </Button>
        </Typography>
      );
    } else {
      return (
        <Typography>
         <Button color="inherit">
          <Link to='/signup' className={classes.link2}>
              Sign Up
          </Link> 
         </Button>

         <Button color="inherit">
          <Link to='/login' className={classes.link2}>
            Login
          </Link> 
         </Button>
        </Typography>
      );
    }
  }

  return (

    // <header className="flex-row px-1">

        <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    <span role="img" aria-label="Craftstor" className={classes.icon} >🛠️🔗🗜️</span>
                    <Link to='/' className={classes.link} > 
                        Craftstor
                    </Link>
                </Typography>
                {showNavigation()}
                {/* <Button color="inherit"><Link to='/signup' className={classes.link2}>Sign Up</Link> </Button>
                <Button color="inherit"><Link to='/login' className={classes.link2}>Login</Link> </Button> */}
              </Toolbar>
            </AppBar>
        </div>

  //  </header>
  )
}

export default Navbar
