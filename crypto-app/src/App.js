import React from "react";

import Home from "./pages/Home"
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import Result from "./pages/Result";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/result/:b" exact>
            <Result />
          </Route>

          <Route path="*"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
