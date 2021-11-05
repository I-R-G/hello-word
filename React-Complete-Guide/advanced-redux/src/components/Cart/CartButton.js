import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  function displayCartHandler(){
    dispatch(uiActions.displayCart())
  }

  return (
    <button onClick = {displayCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
