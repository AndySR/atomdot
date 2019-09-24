import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./views/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
