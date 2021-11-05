import { Link } from "react-router-dom";

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
