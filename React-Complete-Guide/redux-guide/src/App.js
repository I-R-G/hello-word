import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const userIsLoged = useSelector((state) => state.auth.isLoged);

  return (
    <Fragment>
      <Header />
      {!userIsLoged ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
