import { BsFillCartCheckFill } from "react-icons/bs";
import { ImTruck } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import classes from './CartForm.module.css';
import { IoStorefrontSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice/cart-slice";


const CartForm = (props) => {

  const dispatch = useDispatch()

  let availability = 'Click to check store availability';

  const checkAvailability = () => {
    if (props.available) {
      availability = `available in store ${<BsCheckLg />}`
    }
  };

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  }

  const decrease = () => {
    if (quantity === 0) {
      return;
    }

    setQuantity(quantity - 1);
  }


  const addToCartHandler = (event) => {
    event.preventDefault();

    let price = Number(props.data.price).toFixed(2);
    let discount;

    if (props.data.discount) {
      discount = Number(props.data.price).toFixed(2) * Number(props.data['discount percent'])/100;
      price = Number(props.data.price) - discount;
    }


    let item = {
      id: props.data.id,
      model: props.data.model,
      brand: props.data.brand,
      itemPrice: props.data.price,
      totalCost: price,
      img: props.data.img[0],
      quantity,
    }

    dispatch(cartActions.addToCart(item));


  }


  return (
    <div className={classes.container}>

      <div className={classes.banner}>

        <div>
          <ImTruck className={classes.icona}/>
          <span onClick={checkAvailability}>{availability}</span>
        </div>

        <div>
          <IoStorefrontSharp className={classes.iconb}/>
          <span>Free Delivery to <strong>Canada</strong>. In-stock Most orders placed before 3 p.m.ET ship same day (except weekends and holidays)</span>
        </div>

        <span className={classes.warning}>{`Hurry only ${props.amount} items left`}</span>

      </div>

      <form onSubmit={addToCartHandler} className={classes.form}>

        <div className={classes.input}>
          <button onClick={decrease} type='button'>-</button>
          <span>{quantity}</span>
          <button onClick={increase} type='button'>+</button>
        </div>

        <button 
        className={classes.actions}
        disabled={quantity === 0 && true}
        >Add to cart <BsFillCartCheckFill /></button>
      </form>
    </div>
  );
};

export default CartForm;