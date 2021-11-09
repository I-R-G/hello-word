import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={
                (navData) =>
                  navData.isActive ? classes.active : "" /*V6 SYNTAX */
              }
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active /*V5 SYNTAX*/}
              to="/products"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
