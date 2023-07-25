import { Link } from "react-router-dom";
import classes from './Ranking.module.css';
import { AiTwotoneStar } from "react-icons/ai";


let array = [];

const Ranking = (props) => {

  const accesories = props.data.filter(item => item.instrument === 'accesories');

  array = accesories.sort(function(a,b) {
    if (a.rate === b.rate) {
      return 0;
    }

    if (a.rate > b.rate) {
      return -1
    }

    return 1;
  });

  return (
    <div className={classes.container}>
      <h1>Top 10 complements for you</h1>
      <ul className={classes.list}>
        {array?.splice(0,10).map((item, index)=> 
          <li key={index}>
            <Link to={`/instrument-list/${item.id}`} className={classes.item}>
              <span className={classes.number}>{index + 1}</span>
              <img src={item.img[0]} alt={item.model}></img>
              <span className={classes.rate}>{item.rate.toFixed(1)} <AiTwotoneStar className={classes.icon}/></span>
              <span className={classes.model}>{item.model}</span>
            </Link>
          </li>)}
      </ul>

    </div>
  )
};

export default Ranking;