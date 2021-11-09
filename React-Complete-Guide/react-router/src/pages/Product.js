import { Link , /*useNavigate*/ } from "react-router-dom";//Use navigate replaces useHistory

/*
const navigate = useNavigate

navigate("/welcome", {replace: true})//route ro redirect and argument to replace or just push the page
navigate(-1)//or 1 or 2 ... to skip the respective number of pages or go backwards.
*/
function Product() {
  return (
    <section>
      <h1>The product page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A react course</Link>
        </li>
      </ul>
    </section>
  );
}

export default Product;
