import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../utils/queries';
import { Container } from '@material-ui/core';
// import Rating from '@material-ui/lab/Rating';

 
// added
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// import Link from '@material-ui/core/Link';
// >>> added

// added
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6),
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
}));

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

const Dashboard = () => {

  //rating
  // const [value, setValue] = React.useState(2);
  // const [hover, setHover] = React.useState(-1);

  //added
  const classes = useStyles();
  //>>>> added

  const { loading, data } = useQuery(GET_USER_BY_ID);
  const userData = data?.getUserById  || [];
  const cards = [{client:"Grace corp", dueDate:"10/10/2021",checked: false }, 
                  {client:"Apple inc", dueDate:"9/25/2021",checked: false }, 
                  {client:"John Doe", dueDate:"12/20/2021",checked: true }, 
                  {client:"John Doe", dueDate:"12/20/2021",checked: true }, 
                ] ;

  for (let i = 0; i < cards.length; i++)  cards[i].image =  'https://source.unsplash.com/random?sig=' + i ;

  console.log(">>>>>>>  user:");
  console.log(userData);
  console.log("<<<<<<<<");

  return (
    <React.Fragment>
    <Container>
      {loading ? (
        <Container>Loading...</Container>
      ) : (
        // userData.username
        <>
            <CssBaseline />
 
              <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                  <Container maxWidth="sm">
                    {/* <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom> */}
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                         {userData.username}
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        <div>{userData.firstName} {userData.lastName} / {userData.email}</div>
                    </Typography>
                    <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary"  href="/profile">
                              Profile 
                          </Button>
                        </Grid>

                        <Grid item>
                          <Button variant="outlined" color="primary" href="/projects">
                             Project
                          </Button>
                        </Grid>
                        
                      </Grid>
                    </div>
                  </Container>
                </div>
                
                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {cards.map((card,index) => (
                     
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            // image="https://source.unsplash.com/random"
                            image={card.image}
                            title="Image title"
                          />
                          <CardContent className={classes.cardContent}>

                            <Typography gutterBottom variant="h5" component="h4" className={classes.client_format}>
                                <Avatar className={classes.icon_color}>{card.client.charAt(0)}</Avatar>{card.client}
                            </Typography>
                            <Typography>
                            <span style={{ fontSize: '10px' }}>due date:</span> {card.dueDate}
                             </Typography><Typography display='flex'>
                             <span style={{ fontSize: '10px' }}>status:</span> {card.checked? "completed": "pending"}
                            </Typography>

                          </CardContent>
                          <CardActions>

                            <Button size="small" color="primary" value={card} href="/">
                               <div style={{ fontSize: '10px' }}>... read more</div>
                            </Button>
                          </CardActions>


                           {/* <div className={classes.root}>
                                  <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                      setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                      setHover(newHover);
                                    }}
                                  />
                                  {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                             </div> */}
 


                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
        
        </>
      )}

      



    </Container>
    </React.Fragment>
  )
}

export default Dashboard
