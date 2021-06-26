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

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
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
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
