import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH_USERS } from "../utils/queries";

import { Container, Card, Typography } from "@material-ui/core";

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

  console.log(usersData);

  return (
    <Container>
      <Typography>Search Results</Typography>
      {usersData.map((user) => (
        <Card key={user._id}>
          <UserInfo state={user} />
          <SkillsList state={user} />
        </Card>
      ))}
    </Container>
  );
};

export default Search;
