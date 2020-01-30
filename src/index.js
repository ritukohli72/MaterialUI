import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import Detail from "./detail";
import { BrowserRouter, Route } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Demo} exact={true}/>
      <Route path="/:id" component={Detail} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.querySelector("#root"));
