import React, { useState } from "react";
import ProductsContext from "./products-context";

function ProductProvider(props) {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  function toggleFavorite(id) {
    setProductsList((currentProductList) => {
      const proIndex = currentProductList.findIndex(
        (product) => product.id === id
      );
      const newFavStatus = !currentProductList[proIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[proIndex] = {
        ...currentProductList[proIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts
    });
  }

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
