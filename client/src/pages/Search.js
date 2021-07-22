import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH_USERS } from "../utils/queries";

import { Container, Card, Typography, Box } from "@material-ui/core";

import UserInfo from "../components/UserInfo";
import SkillsList from "../components/SkillsList";

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  let query = useRouterQuery().get("q");

  const [usersData, setUsersData] = useState([]);

  const { loading, data } = useQuery(SEARCH_USERS, {
    variables: { query },
  });

  useEffect(() => {
    if (data) {
      setUsersData(data.getUsers);
    }
  }, [data]);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Typography>Search Results</Typography>
          {usersData.map((user) => (
            <Box m={2}>
              <Card key={user._id}>
                <UserInfo state={user} />
                <SkillsList user={user} />
              </Card>
            </Box>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
