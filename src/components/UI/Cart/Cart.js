import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { cartActions } from "../../../store/cart-slice/cart-slice";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import classes from './Cart.module.css';
import CartItem from "./CartItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";


const Cart = () => {
  
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.cartItems);
  const total = useSelector(state => state.cart.totalPrice);
  const isSignIn = localStorage.getItem('isSignIn')

  const closeCartHandler = () => {
    dispatch(cartActions.closeCartHandler());
  };

  return (
    <Modal onClick={closeCartHandler}>

        <div className={classes.title}>Shopping cart 
        <IoCloseOutline style={{cursor: 'pointer'}} onClick={closeCartHandler}/>
        </div>
        <div className={classes.content}>
          {cartData.length > 0? 
          <>
            <ul className={classes.list}>
              {cartData?.map((item, index) =>
              <CartItem 
              items={item}
              key={index}
              /> )
              }
            </ul>

            <div className={classes.total}>
              <span>Total</span>
              <strong>{` $${total.toFixed(2)}CAD`}</strong>
            </div>

            {!isSignIn && <span className={classes.warn}>
              <strong><Link to='/sign-in' className='links'>Sign In</Link></strong> or <Link to='/create-account' classes='links'><strong>create an account</strong></Link> to proceed with your purchase
            </span>}

            <Button disabled={!isSignIn}>Place order</Button>
          </>
          
          : <CartEmpty />}
        </div>
    </Modal>
  )
};

export default Cart;