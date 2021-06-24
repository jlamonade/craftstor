import React from 'react'
import Dashboard from './Dashboard'
import Auth from '../utils/auth'
 
//  added
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';


// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));
// >>>>>>>>>>>>>>>> added

const mainFeaturedPost = {
  title: 'CraftSor',
  description:
    "Find a ....... s.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '…',
};

const Home = () => {
  // const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container>
      {Auth.loggedIn() ? (
        <Dashboard />
      ) : (
          <>
            <Container maxWidth="lg">
              <main>
                <MainFeaturedPost post={mainFeaturedPost} />
              </main>
            </Container>
            <Footer title="Footer" description="JPWDH Group" />
          </>
      )}
    </Container>
    </React.Fragment>
  )
}

export default Home