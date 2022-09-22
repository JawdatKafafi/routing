import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import Posts from "./Posts";
import Users from "./Users";

function Dashboard({ match }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Switch>
        <Route path="/admin/posts" component={Posts} />
        <Route path="/admin/users" component={Users} />
      </Switch>
    </div>
  );
}

export default Dashboard;
