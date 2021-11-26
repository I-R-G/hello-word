import React from "react";

 const ProductsContext = React.createContext({
  products: [],
  toggleFavorite :  (id) => {}
});

export default ProductsContext