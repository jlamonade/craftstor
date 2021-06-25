import React, { createContext, useContext, useReducer } from 'react'

import reducer from './reducers'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  profile: {
    skills: [],
    porfolio: ''
  },
  savedProjects: []
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}

