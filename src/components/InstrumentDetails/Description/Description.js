import { AiFillLike } from "react-icons/ai";
import classes from './Description.module.css';
import ItemSlide from '../../HomeSections/Slides/ItemSlide';
import { AiTwotoneStar } from "react-icons/ai";
import Ranking from "../Ranking/Ranking";

const Description = (props) => {

  let displayedSlideItems = props.data?.filter(item => {
    if(item.brand === props.selected.brand) {
      return item;
    }
  }).slice(0,10);

  let sortedArray = displayedSlideItems.sort((a, b) => {
    if(a.rate === b.rate) {
      return 0; 
    }
    if(a.rate < b.rate) {
      return -1;
    }
    return 1;
  })

  const relatedItems = {

    array: sortedArray,
      
    span: 'Our choice for you',
    h2: 'Related items',
    parag: 'See this items that could be interesting for you'
  }


  return (
    <div className={classes.div}>

      <article className={classes.text}>
        <h1>Description</h1>
        <p>{props.selected.description}</p>
      </article>

      <article className={classes.text}>
        <h1>Features</h1>
        <ul className={classes.features}>
          {props.selected.features?.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </article>

      <article>
        <ItemSlide info={relatedItems}/>
      </article>

      <article className={`${classes.text} ${classes.revRank}`}>

        <div>
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

        <Ranking data={props.data} selected={props.selected}/>

      </article>


    </div>
  );
};

export default Description;