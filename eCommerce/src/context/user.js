// user context
import React , { createContext , useState } from 'react'

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    user: false
  })

  const { user } = data;
  return <UserContext.Provider value={{
    user
  }}>
    {children}    
    </UserContext.Provider>
}


