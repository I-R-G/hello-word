//NavLink has the activeClassName property which will activate the css class when the user is currently in that route
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css"

function MainHeader() {
  return (
    <header className = {classes.header}>
      <nav>
        <ul>
          <li>
           <NavLink activeClassName = {classes.active} to = "/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName = {classes.active} to = "/products">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
