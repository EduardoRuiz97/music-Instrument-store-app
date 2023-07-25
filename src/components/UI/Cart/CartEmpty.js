import Button from "../Button/Button";
import icon from '../../../assets/undraw_shopping_app_flsj.svg'
import { Link } from "react-router-dom";
import classes from './CartEmpty.module.css';
import { cartActions } from "../../../store/cart-slice/cart-slice";
import { useDispatch } from "react-redux";

const CartEmpty = () => {

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(cartActions.closeCartHandler());
  }

  return (
    <div className={classes.container}>
      <img src={icon} alt='cart empty illustration by illustrate me'></img>
      <span>Cart is empty. Go check the incredible gear that is waiting for you</span>
      <Link className='links' to='/instrument-list'>
        <Button onClick={closeCartHandler}>Go to instruments list</Button>
      </Link>
    </div>
  )
};

export default CartEmpty;