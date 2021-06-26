import { useLocation } from "react-router-dom"

function useRouterQuery() {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  let query = useRouterQuery().get("q")
  
  return (
    <div>{query}</div>
  )
}

export default Search