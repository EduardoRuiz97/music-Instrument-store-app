"use client"
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import CartButton from "../UI/Cart/CartButton";
import Cart from "../UI/Cart/Cart";
import { sendCartData } from "@/redux/features/cartSliceActions";
import { fetchCartData } from "@/redux/features/cartSliceActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export default function Layout(props) {

  const isCartOpen = useSelector(state => state.cart.isCartOpen);
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCost);
  const cartChanged = useSelector(state => state.cart.cartChanged);
  const dispatch = useDispatch();


  useEffect(() => {
    if (cartChanged) {
      dispatch(sendCartData(cartItems, totalCost));
    }
  },[dispatch, cartChanged, cartItems, totalCost]);

  useEffect(() => {
    if (cartChanged) {
      dispatch(fetchCartData());
    }
  }, [dispatch, cartChanged, cartItems, totalCost]);




  return (
    <>
      <NavBar />
        {props.children}
        {!isCartOpen && cartItems.length > 0 && <CartButton amount={cartItems.length}/>}
        {isCartOpen  && <Cart />}
      <Footer />
    </>
  )
}  