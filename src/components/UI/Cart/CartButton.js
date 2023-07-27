import { AiOutlineShopping } from "react-icons/ai";
import classes from './CartButton.module.css';
// import { cartActions } from "../../../redux/cart-slice/cart-slice";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "@/redux/features/car-slice";


const CartButton = (props) => {

  const dispatch = useDispatch();

  const openCartHandler = () => {
   dispatch(cartSliceActions.openCartHandler());
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