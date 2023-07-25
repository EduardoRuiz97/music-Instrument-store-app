import classes from './InstrumentContainer.module.css';
import AsideFilter from '../UI/Filter/AsideFilter';
import DisplayedList from '../DisplayedList/DisplayedList';
import { useEffect, useState } from 'react';

const InstrumentContainer = (props) => {

  const [filtratedArray, setFiltratedArray] = useState([]);

  useEffect(()=> {
    setFiltratedArray(props.data)
  }, [props.data, setFiltratedArray]);

  
  const filterHandler = (criteria) => {
    let newItem ={'criteria': criteria};
    let data;
    
    if (newItem.criteria.type === 'brand') {
      data = props.data?.filter(item => item.brand === newItem.criteria.value);
      setFiltratedArray(data);
    }
    
    if (newItem.criteria.type === 'price') {
      data = props.data?.filter(item => {
        if(item.price > newItem.criteria.value.min && item.price < newItem.criteria.value.max) {
          return item;
        };});
        setFiltratedArray(data);
      }
    }
    
    
    const resetHandler = () => {
      setFiltratedArray(props.data);
    }

  return (
    <section className={classes.section}>
      
      <aside>
        <AsideFilter data={props.data} onFilter={filterHandler} onReset={resetHandler}/>
      </aside>

      <div>
        <DisplayedList data={filtratedArray}/>
      </div>


    </section>
  )
};

export default InstrumentContainer;