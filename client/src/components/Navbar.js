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
                    <span role="img" aria-label="Craftstor">🎨</span>
                    <Link to='/'> 
                        Home
                    </Link>
                </Typography>
                <Typography>{showNavigation()}</Typography>
                <Button color="inherit"><Link to='/signup'>Sign Up</Link> </Button>
                <Button color="inherit"><Link to='/login'>Login</Link> </Button>
              </Toolbar>
            </AppBar>
        </div>

  //  </header>
  )
}

export default Navbar
