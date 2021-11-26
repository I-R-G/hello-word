import React from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';
import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = props => {
  const dispatch = useDispatch()

  function toggleFavorite(){
    dispatch(productActions.toggleFavoriteState(props.id))
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick = {toggleFavorite}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
