import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
  
import './App.css';

function App() {

  const Routes = useRoutes(routes);

  return (
    <div>
      {Routes}
    </div>
  );
}

export default App;
