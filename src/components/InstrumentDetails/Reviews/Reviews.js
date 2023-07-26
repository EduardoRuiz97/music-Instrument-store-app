import classes from './Reviews.module.css';
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const Reviews = (props) => {
  return (
    <div className={classes.container}>
      <h1>Reviews</h1>
      {props.selected.reviews?.map ((item, index) => <div key={index} className={classes.reviews}>
        <div>
          <span>9.5 <AiTwotoneStar /></span>
          <h4>Review subtitle</h4>
          <p>{item}</p>
        </div>
        <span>Was this helpfull? <AiFillLike /></span>
      </div>)}
    </div>
  )
};

export default Reviews;