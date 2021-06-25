import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '../utils/queries'
import { Container } from '@material-ui/core'
 
// added
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    padding: theme.spacing(8, 0, 6),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Dashboard = () => {
  //added
  const classes = useStyles();
  //>>>> added

  const { loading, data } = useQuery(GET_USER_BY_ID);
  const userData = data?.getUserById  || [];
  const cards = [{client:"Grace corp", dueDate:"10/10/2021",checked: "false" }, 
                  {client:"Apple inc", dueDate:"9/25/2021",checked: "false" }, 
                  {client:"John Doe", dueDate:"12/20/2021",checked: "true" }, 
                  {client:"John Doe", dueDate:"12/20/2021",checked: "true" }, 
                ] ;


  for (let i = 0; i < cards.length; i++)  cards[i].image =  'https://source.unsplash.com/random?sig=' + i ;

  console.log(">>>>>>>  user:");
  console.log(userData);
  console.log("<<<<<<<<");


  return (
    <React.Fragment>
    <Container>
      Dashboard
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
                        {/* <Grid item>
                          <Button variant="outlined" color="primary" href="/projects">
                             Project
                          </Button>
                        </Grid> */}
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

                            <Typography gutterBottom variant="h5" component="h2">
                            {card.client}
                            </Typography>
                            <Typography>
                             due date: {card.dueDate}
                             </Typography><Typography>
                             status: {card.checked? "completed": "pending"}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            {/* <Button size="small" color="primary">
                              View
                            </Button> */}
                            <Button size="small" color="primary" value={card} href="/projects">
                              Edit
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
              {/* Footer */}
              <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                  {/* Footer */}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                   © JPWDH Inc
                </Typography>
              </footer>
              {/* End footer */}
        
        </>
      )}

      




    </Container>
    </React.Fragment>
  )
}

export default Dashboard