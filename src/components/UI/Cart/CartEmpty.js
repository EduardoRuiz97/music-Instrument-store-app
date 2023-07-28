import Button from "../Button/Button";
import Link from "next/link";
import classes from './CartEmpty.module.css';
import { cartSliceActions } from "@/redux/features/car-slice";
import { useDispatch } from "react-redux";
import Image from "next/image";

const CartEmpty = () => {

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(cartSliceActions.closeCartHandler());
  }
  

  return (
    <div className={classes.container}>
      <Image 
      src={'/assets/undraw_shopping_app_flsj.svg'} 
      alt='cart empty illustration by illustrate me'
      width={300}
      height={300}
      ></Image>
      <span>Cart is empty. Go check the incredible gear that is waiting for you</span>
      <Link className='links' href='/home/instrument-list/guitar'>
        <Button onClick={closeCartHandler}>Go to instruments list</Button>
      </Link>
    </div>
  )
};

export default CartEmpty;