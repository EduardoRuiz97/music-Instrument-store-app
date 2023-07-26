"use client"
import { AiTwotoneStar } from "react-icons/ai";
import CartForm from "../CartForm/CartForm";
import classes from  './InstrumentInfo.module.css';

const InstrumentInfo = (props) => {

  let price = <span className={classes.price}>{`$${Number(props.selected.price)}CAD`}</span>;
  let amount = Number(props.selected.price);
  let discount;

  if (props.selected.discount) {

    discount = amount * Number(props.selected['discount percent']) / 100;

    price = <span className={classes.priceD}>
      <strong>{`$${(amount - discount).toFixed(2)}CAD`}</strong>

      <span className={classes.oldP}>{`$${Number(props.selected.price)}CAD`}</span>

      <span className={classes.discount}>{`saved $${discount.toFixed(2)}CAD`}</span>

      <span className={classes.percent}>{`(${props.selected['discount percent']}%)`}</span>
    </span>;
  }

  let sell = <span style={{color: '#242424', border: '1px solid rgba(119, 119, 119, 0.5)'}} className={classes.type}>Top seller</span>

  if (props.selected.new) {
    sell = <span style={{color: '#f03a22', border: '1px solid #f03a22'}} className={classes.type}>New</span>
  }

  return (
    <div className={classes.info}>
      <span>{sell}</span>
      
      <h2 className={classes.model}>{props.selected.model}</h2>
      <h3 className={classes.brand}>{props.selected.brand}</h3>

      <div className={classes.rate}>

        <span className={classes.id}>{`Item: #0000000${props.selected.id}`}</span>

        <span className={classes.star}>
          {props.selected.rate}
          <AiTwotoneStar className={classes.icon}/>
        </span>

        <span className={classes.reviews}>
          <a href="/">{`${props.selected.reviews.length} Reviews`}</a>
        </span>
        
      </div>

      <div>
        {price}
      </div>

      <CartForm 
      available={props.selected['available-store']}
      amount={props.selected.amount}
      data={props.selected}
      />

    </div>
  )
};

export default InstrumentInfo;