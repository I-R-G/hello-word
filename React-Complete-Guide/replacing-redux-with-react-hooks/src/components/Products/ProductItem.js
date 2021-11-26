import React from 'react';
import { useStore } from '../../hook-store/store';
import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = React.memo(props => {
  console.log("rendering")
  const dispatch = useStore(false)[1]

  function handleFavorite(){
    //ctx.toggleFavorite(props.id)
    dispatch("TOGGLE_FAV", props.id)
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick = {handleFavorite}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
})

export default ProductItem;
