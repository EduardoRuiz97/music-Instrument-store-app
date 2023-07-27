import Button from "../Button/Button";
import ModalOverlay from "../Modal/Modal";
import { cartSliceActions } from "@/redux/features/car-slice";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import classes from './Cart.module.css';
import CartItem from "./CartItems";
import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import Link from "next/link";


const Cart = () => {
  
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.totalCost);
  const isSignIn = useSelector(state => state.logged.isLoggedIn);

  const closeCartHandler = () => {
    dispatch(cartSliceActions.closeCartHandler());
  };

  return (
    <ModalOverlay>

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
              <strong><Link href='/login' className='links'>Sign In</Link></strong> or <Link href='/signup' classes='links'><strong>create an account</strong></Link> to proceed with your purchase
            </span>}

            <Button disabled={!isSignIn}>Place order</Button>
          </>
          
          : <CartEmpty />}
        </div>
    </ModalOverlay>
  )
};

export default Cart;