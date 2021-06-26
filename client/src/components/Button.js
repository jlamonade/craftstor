import { Button } from "@material-ui/core";

const LinkButton = (props) => {
  return (
    <Button variant="contained" color="primary" href={props.url}>
      {props.name}
    </Button>
  );
};

export default LinkButton;
