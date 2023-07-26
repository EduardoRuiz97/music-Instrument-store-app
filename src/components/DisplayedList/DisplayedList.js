"use client"
import { useEffect, useState } from "react";
import classes from './DisplayedList.module.css';
import InstrumentList from "../InstrumentsList/InstrumentList";
import Pagination from "../UI/Pagination/Pagination";
import Sorter from "../UI/Sorter/Sorter";

const DisplayedList = (props) => {

  const [sortedArray, setSortedArray] = useState([]);

  useEffect(()=> {
    setSortedArray(props.data);
  }, [props.data]);

  //Pagination section//

  const [initialIndex, setInitialIndex] = useState(0);

  let itemsPerPage = 21;
  let totalItems = sortedArray.length;
  const maxNumberOfPages = sortedArray.length / itemsPerPage;

  const paginationHandler = (direction) => {
    if (initialIndex < 0 || initialIndex === Math.ceil(maxNumberOfPages)) {
      return;
    }
    setInitialIndex(initialIndex + direction);
  }

  const onSorterHandler = (sortedArray) => {
    setSortedArray(sortedArray);
  }

  return (
    <div className={classes.container}>
      
      <div className={classes.actions}>
        <div className={classes.text}>
          <strong>{`${props.data.length} `}</strong>
           items found
        </div>

        <div className={classes.sorter}>
          <Sorter onSorter={onSorterHandler} data={props.data}/>
        </div>

        <div className={classes['pagination-up']}>
          <Pagination 
          onPagination={paginationHandler}
          pages={maxNumberOfPages}
          current={initialIndex}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          />
        </div>

      </div>

      <InstrumentList 
      data={sortedArray} 
      indexIn={initialIndex*itemsPerPage}
      indexFn={initialIndex*itemsPerPage + itemsPerPage -1}
      />


      <div className={classes['pagination-down']}>
        <Pagination 
        onPagination={paginationHandler}
        pages={maxNumberOfPages}
        current={initialIndex}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        />
      </div>

    </div>
  )
};

export default DisplayedList;