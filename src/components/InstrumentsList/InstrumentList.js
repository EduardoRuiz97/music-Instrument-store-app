import ListItem from "./ListItem";
import classes from './InstrumentList.module.css';


const  InstrumentList = (props) => {

  return (
    <ul className={classes.list}>
      {props.data?.slice(props.indexIn, props.indexFn).map((item, index) => <ListItem item={item} key={index}/>)}
    </ul>
  )
}

export default InstrumentList;