import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const LinkButton = ({ name, url }) => {
  return (
    <Button variant="contained" color="primary">
      <Link to={url}>{name}</Link>
    </Button>
  );
};

export default LinkButton;
