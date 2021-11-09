import { Link, Outlet } from "react-router-dom";
//In V6 the path and links defined inside the parent element with the original path are realtive
//You don't need to write the path again, just the extra path you want to link and route


//Outlet components is just a placeholder to tell react where to render the child route
function Welcome() {
  return (
    <section>
      <h1>The welcome page</h1>
      <Link to = "new-user">New User</Link>
      <Outlet/>
    </section>
  );
}

export default Welcome;
