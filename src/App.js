import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import AuthContext from "./context/AuthContext";
  
import './App.css';

function App() {

  const Routes = useRoutes(routes);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {

    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));

  }, []);

  const logout = useCallback(() => {

    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");

  }, []);

  useEffect(() => {

    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          "Authorization": `Bearer ${localStorageData.token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setIsLoggedIn(true);
          setUserInfos(data);
        })
        .catch(err => console.log(err));
    }
    console.log(localStorageData);

  },[login])

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
