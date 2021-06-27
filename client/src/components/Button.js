import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { linkStyle } from '../components/LinkStyle'

const LinkButton = ({ name, url }) => {
  return (
    <Button variant="contained" color="primary">
      <Link style={linkStyle} to={url}>{name}</Link>
    </Button>
  );
};

export default LinkButton;
