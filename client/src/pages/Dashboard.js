import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '../utils/queries'
import { Container } from '@material-ui/core'
 
const Dashboard = () => {

  const { loading, data } = useQuery(GET_USER_BY_ID)
  const userData = data?.getUserById  || []
  console.log(userData)

  return (
    <Container>
      Dashboard
      {loading ? (
        <div>Loading...</div>
      ) : (
        // userData.username
        <>
          <div>{userData.username}</div>
          <div>{userData.email}</div>
          <div>{userData.firstName}</div>
          <div>{userData.lastName}</div>
        </>
      )}
    </Container>
  )
}

export default Dashboard