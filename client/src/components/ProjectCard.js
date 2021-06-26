import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const ProjectCard = ({ state, card, classes, index}) => {
  const images = [];
  console.log("https://source.unsplash.com/random?sig="+index);

  // random image loop
  for (let i = 0; i < state.savedProjects.length; i++)
    images.push("https://source.unsplash.com/random?sig=" + i);


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        // image="https://source.unsplash.com/random"
        // image={images[i++]}
        image = {"https://source.unsplash.com/random?sig="+index} 
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
          <span style={{ fontSize: "9px" }}> due date: </span>
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
          <span style={{ fontSize: "9px" }}>View detail .....</span>
        </Button>
        {/* <Button size="small" color="primary" value={card} href="/projects">
                                Edit
                              </Button> */}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
