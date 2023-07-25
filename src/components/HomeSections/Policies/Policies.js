import classes from './Policies.module.css';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdRestore } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


const Policies = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>

        <li>
          <div className={classes.item}>
            <CiDeliveryTruck className={classes.icon}/>
            <h2>Free Delivery</h2>
            <h3>For all oders over $300</h3>
          </div>
        </li>

        <li>
          <div className={classes.item}>
            <MdRestore className={classes.icon}/>
            <h2>90-Day Returns.</h2>
            <h3>Our goal is your satisfaction</h3>
          </div>
        </li>

        <li>
          <div className={classes.item}>
            <MdAddCard className={classes.icon}/>
            <h2>Secure Payment</h2>
            <h3>We accept Visa and MasterCard</h3>
          </div>
        </li>

        <li>
          <div className={classes.item}>
            <BiSupport className={classes.icon}/>
            <h2>24/7 Support</h2>
            <h3>We'll answer all your questions</h3>
          </div>
        </li>

      </ul>
    </div>
  )
};

export default Policies;