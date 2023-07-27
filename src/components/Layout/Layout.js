"use client"
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import CartButton from "../UI/Cart/CartButton";
import Cart from "../UI/Cart/Cart";

export default function Layout(props) {

  const isCartOpen = useSelector(state => state.cart.isCartOpen);

  const cartItems = useSelector(state => state.cart.items);

  console.log(cartItems.length);

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