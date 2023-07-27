import classes from './CartItem.module.css';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '@/redux/features/car-slice';

const CartItem = (props) => {

  const dispatch = useDispatch();



  const removeItemHandler = () => {
    console.log(props.items);
    dispatch(cartSliceActions.reduceQuantity(props.items));
  }

  const deleteItemHandler = () => {
    dispatch(cartSliceActions.removeItemFromCart(props.items));
  }

  const addItemHandler = () => {

    let item = {
      ...props.items,
      quantity: 1,
    };

    dispatch(cartSliceActions.addItemToCart(item));
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