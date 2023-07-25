import Link from "next/link";
import Button from "../Button/Button";
import classes from './AddContainer.module.css';


const AddContainer = (props) => {

  const item = props.item.filter(item => item.instrument === props.inst).sort((a,b) => {
    const aPrice = Number(a.price).toFixed(2);
    const bPrice = Number(b.price).toFixed(2);

    return aPrice > bPrice;
  })[0];

  let itemClasses = `${classes.container}`;

  if (props.inst === 'bass') {
    itemClasses = `${classes.container} ${classes.bass}`;
  }

  if (props.inst === 'guitar') {
    itemClasses = `${classes.container} ${classes.guitar}`;
  }

  if (props.inst === 'pedal') {
    itemClasses = `${classes.container} ${classes.effects}`;
  }




  return (
    <div className={itemClasses}>

      <div className={props.promo? classes.promo: classes.banner }>
        <span>{`Best-Selling ${item.instrument}`}</span>
        <h1>{item.model}</h1>

        <span className={classes.price}>
          {`$${Number(item.price).toFixed(2)}`}
        </span>

        <p>The best price you can find for the gear you want</p>
        <Button>
          <Link href={'/'} className='links'>
            Buy now
          </Link>
        </Button>
      </div>

    </div>
  )
};

export default AddContainer;
