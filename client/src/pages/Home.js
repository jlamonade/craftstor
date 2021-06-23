import React from 'react'
import { Container } from '@material-ui/core'
import Dashboard from './Dashboard'
import Auth from '../utils/auth'
 
const Home = () => {
  return (
    <Container>
      {Auth.loggedIn() ? (
        <Dashboard />
      ) : (
        <div>Splash Page</div>
      )}
    </Container>
  )
}

export default Home