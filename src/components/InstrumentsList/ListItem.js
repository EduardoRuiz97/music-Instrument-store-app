import classes from './ListItem.module.css';
import Link from 'next/link';
import Button from '../UI/Button/Button';

const ListItem = (props) => {
  return (
    <li className={classes.item}>
      <Link className={`${classes.link} 'links'`} href={`/home/${props.item.id}`}>
        <div className={classes.container}>
          <img src={props.item.img[0]} alt={props.item.model}></img>
          <span className={classes.model}>{props.item.model}</span>
          <span className={classes.brand}>{props.item.brand}</span>
          <span className={classes.price}>{`$${Number(props.item.price).toFixed(2)}`}</span>
          <Button className={classes.cartBtn}>Add to cart</Button>
        </div>
      </Link>
    </li>
  )
};

export default ListItem;