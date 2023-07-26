"use client"
import Item from "./Item";
import classes from './Filter.module.css';

const InstrumentFilter = (props) => {

  const types = props.data?.map(item => {
    let type = item.instrument;
    let array = [];
    array.push(type);
    return type;
  });

  const noRepeat = [...new Set(types)];

  return (


    <>
      <ul className={classes.list}>
        {noRepeat.map(item => <Item data={item} key={item} onSelected={props.onSelected}></Item>)}
      </ul>
    </>
  )
};

export default InstrumentFilter;