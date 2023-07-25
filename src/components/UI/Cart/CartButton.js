import { AiOutlineShopping } from "react-icons/ai";
import classes from './CartButton.module.css';
import { cartActions } from "../../../store/cart-slice/cart-slice";
import { useDispatch } from "react-redux";


const CartButton = (props) => {

  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(cartActions.openCartHandler())
  }


  return (
    <button className={classes.cart} onClick={openCartHandler}>
      <div>
        <span className={classes.items}>{props.amount}</span>
        <AiOutlineShopping className={classes.icon}/>
      </div>

    </button>
  )
};


export default CartButton;