import { useState } from "react";
import {
  Button,
  Input,
  Container,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { linkStyle } from "../components/LinkStyle";

const SearchForm = () => {
  // state
  const [searchFormData, setSearchFormData] = useState("");

  // onchange
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchFormData(value);
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item>
          <Input
            id="search"
            name="search"
            value={searchFormData}
            onChange={handleInputChange}
            placeholder="Search..."
            style={{ backgroundColor: 'white', padding: 5 }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ backgroundColor: 'black' }} disableElevation>
            <Link to={`/search?q=${searchFormData}`} style={linkStyle}>
              Search
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchForm;
