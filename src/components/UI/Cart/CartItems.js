import classes from './CartItem.module.css';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.reduceQuantity(props.items));
  }

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItem(props.items));
  }

  const addItemHandler = () => {

    let item = {
      ...props.items,
      quantity: 1,
    };

    dispatch(cartActions.addToCart(item));
  }



  return (
    <li className={classes.list}>

      <div className={classes.container}>

        <div className={classes.product}>
          <span>Product</span>
          <img src={props.items.img} alt={props.items.model}></img>
        </div>

        <div className={classes.name}>
          <span>{props.items.model}</span>
        </div>

        <div className={classes.actions}>
          <button onClick={addItemHandler}>+</button>
          <button onClick={removeItemHandler}>-</button>
        </div>

        <div className={classes.cost}>
          <span>{`${props.items.quantity} x $${props.items.totalCost}CAD`}</span>
        </div>

        <div>
          <MdDelete className={classes.icon} onClick={deleteItemHandler}/>
        </div>

      </div>

    </li>
  )
};

export default CartItem;