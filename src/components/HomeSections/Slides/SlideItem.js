import Link from "next/link";
import Button from "../../UI/Button/Button";
import classes from './SlideItem.module.css';
import { cartActions } from "../../../store/cart-slice/cart-slice";
import { useDispatch } from "react-redux";

const SlideItem = (props) => {

  // const dispatch = useDispatch();

  const addToCartHandler = () => {
    let price = Number(props.items.price).toFixed(2);
    let discount;

    if (props.items.discount) {
      discount = Number(props.items.price).toFixed(2) * Number(props.items['discount percent'])/100;
      price = Number(props.items.price) - discount;
    }


    let item = {
      id: props.items.id,
      model: props.items.model,
      brand: props.items.brand,
      itemPrice: props.items.price,
      totalCost: price,
      img: props.items.img[0],
      quantity: 1,
    }

    // dispatch(cartActions.addToCart(item));
  }


  return (
    <div className={classes.container}>
      <Link className="links" href={`/${props.items.id}`}>
        <img src={props.items.img[0]} alt={props.items.model}></img>
      </Link>
      <span className={classes.model}>{props.items.model}</span>
      <span className={classes.brand}>{props.items.brand}</span>
      <span className={classes.price}>{`$${Number(props.items.price).toFixed(2)}`}</span>
      <Button className={classes.cartBtn} onClick={addToCartHandler}>Add to cart</Button>
    </div>
  )
}

export default SlideItem;