import React from "react";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <div>
      <li>
        <Link to="/admin/posts">Posts</Link>
      </li>
      <li>
        <Link to="/admin/users">Users</Link>
      </li>
    </div>
  );
}

export default Sidebar;
