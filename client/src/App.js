import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
