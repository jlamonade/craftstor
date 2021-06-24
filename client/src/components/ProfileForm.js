import React, { useState } from 'react';
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
// import Auth from '../utils/auth'


const ProfileForm = () => {
  const [userProfileFormData, setUserProfileFormData] = useState({
    portfolio: '',
    skills: [],
  })

  // const [updateProfileUser] = useMutation(UPDATE_PROFILE);
  const [updateProfileUser] = useMutation()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    userProfileFormData({ ...userProfileFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    // set up mutation here to send form data into the back
    try {
      const { data } = await updateProfileUser({
        variables: { ...userProfileFormData }
      })
    //   Auth.login(data.updateProfileUser.token)
    console.log(data);
    } catch (err) {
      console.log();
    }

    setUserProfileFormData({
        portfolio: '',
        skills: [],
    })
  }

  return (
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="portfolio">Portfolio</InputLabel>
          <Input id="portfolio" onChange={handleInputChange} name='portfolio' value={userProfileFormData.portfolio}/>
        </FormControl>
        {/* <Skills /> */}
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}



export default ProfileForm