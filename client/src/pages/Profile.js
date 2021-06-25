import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Grid } from '@material-ui/core'

const Profile = () => {

  // use query to get profile information using the params
  // then render it in the return

  return (
    <Grid>
      {useParams().username}
    </Grid>
  )
}

export default Profile