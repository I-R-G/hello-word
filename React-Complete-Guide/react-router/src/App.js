import { Route, Routes, Navigate } from "react-router-dom";
//router-dom v6 uses "Routes" instead of "Switch"
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome new user!</p>} />
          </Route>
          <Route path="/products/" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

//"/product-details/:productId" the ":" is mandatory and what comes after can be anything
