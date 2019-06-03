import React from "react";
import './footer.component.scss'

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/home">Landing</Link>
      <Link to="/login">Login</Link>
      <Link to="/register/driver">Driver register</Link>
      <Link to="/register/user">User register</Link>
      <Link to="/dashboard/driver">Driver Dashboard</Link>
    </footer>
  )
}

export {
  Footer
}
