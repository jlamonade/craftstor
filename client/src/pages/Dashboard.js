import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";

// components
import SkillsForm from "../components/SkillsForm";
import SkillsList from "../components/SkillsList"
import UserInfo from "../components/UserInfo"
import LinkButton from "../components/Button"

// state
import { useUserContext } from "../utils/UserContext";
import { INIT_USER_STATE } from "../utils/actions";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  client_format: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon_color: {
    //  backgroundColor:  "primary.main"
    color: "#fff",
    backgroundColor: "#5c6bc0",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // query user data
  const { loading, data } = useQuery(GET_USER_BY_ID);
  const [state, dispatch] = useUserContext();

  // TODO use state to get user information
  useEffect(() => {
    if (data) {
      const userData = data?.getUserById || [];
      dispatch({
        type: INIT_USER_STATE,
        payload: { ...userData },
      });
    }
  }, [data]);

  // USE state.savedProjects to load array of projects associated to user
  // think about using ternary statement to show projects or 'no projects yet'

  const images = [];
  let i = 0;

  // random image loop
  for (i = 0; i < state.savedProjects.length; i++)
    images.push("https://source.unsplash.com/random?sig=" + i);
  i = 0;

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
                  <UserInfo state={state} />
                  <SkillsList state={state} />
                  <SkillsForm />

                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <LinkButton name="Add Project" url="/projects" />
                      </Grid>
                      <Grid item>
                        <LinkButton name="Edit Profile" url="/profile/edit" />
                      </Grid>
                    </Grid>
                  </div>
                </Container>

                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {state.savedProjects.map((card, index) => (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            // image="https://source.unsplash.com/random"
                            image={images[i++]}
                            title="Image title"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h4"
                              className={classes.client_format}
                            >
                              <Avatar className={classes.icon_color}>
                                {card.client.charAt(0)}
                              </Avatar>
                              {card.client}
                            </Typography>
                            <Typography>
                              <span style={{ fontSize: "9px" }}>
                                {" "}
                                due date:{" "}
                              </span>
                              {/* {console.log(format({card.dueDate}, "MMM/dd/yyyy"))} */}

                              {card.dueDate}
                            </Typography>
                            <Typography>
                              <span style={{ fontSize: "9px" }}> status: </span>{" "}
                              {card.checked ? "completed ✔️" : "pending"}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary" href="/">
                              <span style={{ fontSize: "9px" }}>
                                View detail .....
                              </span>
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
  );
};

export default Dashboard;
