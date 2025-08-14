import { useState } from "react";
import { UserContext } from "./UserContext"
import { Navigate } from "react-router-dom";

const UserProvider = ({ children }) => {

  const [token, setToken] = useState(true);
  const [user, setUser] = useState({
    name: 'Vladimir Faundez',
    email: 'correo@correo.com'
  })

  const logout = () => {
    setUser(null);
    setToken(false);
  }

  return (
    <UserContext.Provider
      value={{ user, token, logout }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider