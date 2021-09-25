import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Categories from "./Categories";
function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/library">Your library</Route>
          {/*<Route path="/playlist/:id" component={PlaylistPage}></Route>*/}
        </Switch>
      </div>
    </div>
  );
}

export default Main;
