import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";

// components
import SkillsForm from "../components/SkillsForm";
import SkillsList from "../components/SkillsList";
import UserInfo from "../components/UserInfo";
import LinkButton from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm"

// state
import { useUserContext } from "../utils/UserContext";
import { INIT_USER_STATE } from "../utils/actions";

import { Container, CssBaseline, Grid } from "@material-ui/core";
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
  let x = false;
  const classes = useStyles();

  // query user data
  const [ isAddingProject, setIsAddingProject ] = useState(false)
  const { loading, data } = useQuery(GET_USER_BY_ID);
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    if (data) {
      const userData = data?.getUserById || [];
      dispatch({
        type: INIT_USER_STATE,
        payload: { ...userData },
      });
    }
  }, [data]);

  const startAddingProjectHandler = (e) => {
    e.preventDefault()
    setIsAddingProject(true)
  }

  const stopAddingProjectHandler = () => {
    setIsAddingProject(false)
  }

  const [ children, setChildren ] = useState([]);
  const appendProject= () =>{
    setChildren([...children, <ProjectForm />])
  }


  // USE state.savedProjects to load array of projects associated to user
  // think about using ternary statement to show projects or 'no projects yet'
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
                  <SkillsForm dispatch={dispatch}/>

                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <LinkButton name="Add Project" onClick={appendProject} />
                      </Grid>
                      <Grid item>
                        <LinkButton name="Edit Profile" url="/profile/edit" />
                      </Grid>
                    </Grid>
                  </div>
                </Container>
                {children.map(child => child)}

                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {state.savedProjects.map((card, index) => (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProjectCard
                          card={card}
                          classes={classes}
                          state={state}
                        />
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