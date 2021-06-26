import { useState } from 'react'
import {
  FormControl,
  Button,
  InputLabel,
  Input,
  FormGroup,
  Grid,
} from "@material-ui/core";
import { Link } from 'react-router-dom'

const SearchForm = () => {
  // state
  const [searchFormData, setSearchFormData] = useState("");

  // onchange
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchFormData(value);
  };

  return (
    <FormGroup>
      <Grid align="center">
        <FormControl>
          <InputLabel htmlFor="searchBySkill">Search By Skill</InputLabel>
          <Input
            id="searchBySkill"
            name="searchBySkill"
            value={searchFormData}
            onChange={handleInputChange}
          />
        </FormControl>

        <Button variant="outlined" color="primary">
          <Link to={`/search?q=${searchFormData}`}>Search</Link>
        </Button>
      </Grid>
    </FormGroup>
  );
};

export default SearchForm;
