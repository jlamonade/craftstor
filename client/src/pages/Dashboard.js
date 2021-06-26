import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../utils/queries';

// components
import SkillsForm from '../components/SkillsForm'

// state
import { useUserContext } from '../utils/UserContext'
import { INIT_USER_STATE } from '../utils/actions';

 
import { Avatar,  Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid,  Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  p_margin: {
    marginBottom: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6),
    flexGrow: 1,
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  client_format: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon_color:{
    //  backgroundColor:  "primary.main"
    color: '#fff',
    backgroundColor: "#5c6bc0",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  action: {
    opacity: 0.7,
    position: "relative",
    // "&:hover $media": {
    //   opacity: 1
    // }
    "&:hover" : {
      opacity: 1.0,
    }
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // query user data
  const { loading, data } = useQuery(GET_USER_BY_ID);
  const [state, dispatch] = useUserContext()

  // TODO use state to get user information
  useEffect(() => {
    if (data) {
      const userData = data?.getUserById  || [];
      dispatch({
        type: INIT_USER_STATE,
        payload: {...userData}
      })
    }
    
  }, [data])

  // USE state.savedProjects to load array of projects associated to user
  // think about using ternary statement to show projects or 'no projects yet'

  // temporary data will need to replace with projects from user state
  console.log(">>>>>>>");
  console.log(state.savedProjects);
  const images = []; let i=0;

  // random image loop
  for (i = 0; i < state.savedProjects.length; i++)  images.push('https://source.unsplash.com/random?sig=' + i) ;
  i=0;

  return (
    <React.Fragment>
    <Container>
      {loading ? (
        <Container>Loading...</Container>
      ) : (
        // state.username
      <>
      <CssBaseline />
 
       <main>
      
         <div className={classes.heroContent}>
  
           <Container maxWidth="sm">
             
              <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom marginTop="0">
                    {/* <Typography component="stateh3" variant="h3" align="center" color="textPrimary" gutterBottom> */}  
                    {state.username}
               </Typography>

               <Typography  align="center">
                       {state.firstName} {state.lastName} / <a href="mailto:name@email.com"  style={{"textDecoration": "none", "color":"black"}}> {state.email}</a> / {state.profile.portfolio}               
              </Typography>

               <Typography variant="h5" align="center" color="primary" paragraph>
                    {state.profile.skills.join(' ')}
               </Typography>

               <SkillsForm />

                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary"  href="/projects">
                              Project
                          </Button>
                        </Grid>

                        {/* <Grid item>
                          <Button variant="outlined" color="primary" href="/projects">
                              Project
                          </Button>
                        </Grid>   */}
                    </Grid>
                </div>

          </Container>

                
          <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
              <Grid container spacing={4}>
                  {state.savedProjects.map((card,index) => (
                    
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card} >

                         
                        {/* <div style={{position: 'relative'}} className={classes.action}> */}
                        <CardActionArea className={classes.action}>
                          <CardMedia
                            className={classes.cardMedia}
                            // image="https://source.unsplash.com/random"
                            image={images[i++]}
                            title="Image title"
                           />
                              {/* <div style={{styles.overlay}}>
                                  this text should overlay the image
                              </div> */}
         
                              <div style={{
                                  position: 'absolute', 
                                  color: 'white', 
                                  top: 8, 
                                  left: '50%', 
                                  transform: 'translateX(-50%)',
                                  fontWeight: "fontWeightBold",
                                  fontSize: "2rem",
                                  variant:"outlined"
                                }} > {card.title}</div>
                             {/* </div> */}
                         </CardActionArea>


                          <CardContent className={classes.cardContent}>

                              <Typography gutterBottom variant="h5" component="h4" className={classes.client_format}>
                                    <Avatar className={classes.icon_color}>{card.client.charAt(0)}</Avatar>{card.client}
                              </Typography>
                              <Typography>
                                  <span style={{ fontSize: '9px' }}> due date: </span> 
                                     {/* {console.log(format({card.dueDate}, "MMM/dd/yyyy"))} */}
                                  
                                     {card.dueDate}
                              </Typography><Typography>
                                  <span style={{ fontSize: '9px' }}> status: </span>  {card.checked? "completed ✔️": "pending"}
                              </Typography>
                          </CardContent>

                            <CardActions> 
                              <Button size="small" color="primary"  href="/">
                              <span style={{ fontSize: '9px' }}>View detail .....</span> 
                              </Button>
                              {/* <Button size="small" color="primary" value={card} href="/projects">
                                Edit
                              </Button> */}
                            </CardActions>


                          
                        </Card>
                      </Grid>
                    ))}
                </Grid>
            </Container>

           </div> 
         </main>
        </>
      )}

      



    </Container>
    </React.Fragment>
  )
}

export default Dashboard