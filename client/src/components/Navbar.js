import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
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
    if (0) {
      return (
        <p>X</p>
      );
    } else {
      return (
         <p>Y</p>
      );
    }
  }

  return (

    // <header className="flex-row px-1">

        <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <span role="img" aria-label="Craftstor">🎨 </span>
                    <Link to='/' className={classes.link} > 
                        Home
                    </Link>
                </Typography>
                <Typography>{showNavigation()}</Typography>
                <Button color="inherit"><Link to='/signup' className={classes.link2}>Sign Up</Link> </Button>
                <Button color="inherit"><Link to='/login' className={classes.link2}>Login</Link> </Button>
              </Toolbar>
            </AppBar>
        </div>

  //  </header>
  )
}

export default Navbar