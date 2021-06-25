import React, { createContext, useContext, useReducer } from 'react'

import reducer from './reducers'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
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
  })
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}

