import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USERS_BY_SKILL } from "../utils/queries";

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
    <>
      <div>Search results</div>
      {usersData.map((user) => <div>{user.username}</div>)}
    </>
  );
};

export default Search;
