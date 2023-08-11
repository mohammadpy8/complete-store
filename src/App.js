import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import AuthContext from "./context/AuthContext";
  
import './App.css';

function App() {

  const Routes = useRoutes(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = (userInfos, token) => {

    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));

  };

  const logout = () => {

    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");

  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logout,
    }}>
      {Routes}
    </AuthContext.Provider>
  );
}

export default App;
