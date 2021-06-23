import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '../utils/queries'
import { Container } from '@material-ui/core'
 
const Dashboard = () => {

  const [loading, data] = useQuery(GET_USER_BY_ID)
  const userData = data?.getUserById || []

  return (
    <Container>
      Dashboard
      {loading ? (
        <div>Loading...</div>
      ) : (
        userData.username
      )}
    </Container>
  )
}

export default Dashboard