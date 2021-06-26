import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USERS_BY_SKILL } from "../utils/queries";

import { Container, Card, Typography } from "@material-ui/core"

import UserInfo from '../components/UserInfo'
import SkillsList from '../components/SkillsList'

function useRouterQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  let query = useRouterQuery().get("q");

  const [usersData, setUsersData] = useState([]);

  const { loading, data } = useQuery(GET_USERS_BY_SKILL, {
    variables: { skill: query },
  });

  useEffect(() => {
    if (data) {
      setUsersData(data.getUsersBySkill);
    }
  }, [data]);

  console.log(usersData);

  return (
    <Container>
      <Typography>Search Results</Typography>
      {usersData.map((user) => (
        <Card>
          <UserInfo state={user} />
          <SkillsList state={user} />
        </Card>
      ))}
    </Container>
  );
};

export default Search;
