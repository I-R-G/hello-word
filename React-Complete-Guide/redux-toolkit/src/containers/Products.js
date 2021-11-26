import React from 'react';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useSelector } from 'react-redux';

const Products = props => {

  const list = useSelector((state) => state.productSlice.products)
 
  return (
    <ul className="products-list">
      {list.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
