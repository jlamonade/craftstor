import React from 'react'
import { Container } from '@material-ui/core'
 
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Container>
            <CssBaseline />
 
              {/* Footer */}
              <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                  {/* Footer */}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  © JPWDH inc
                </Typography>
              </footer>
              {/* End footer */}
    </Container>
    </React.Fragment>
  )
}

export default Footer