import { useEffect, useState } from "react";
import classes from './DisplayedList.module.css';
import Sorter from "../UI/Sorter/Sorter";
import InstrumentList from "../InstrumentsList/InstrumentList";
import Pagination from "../UI/Pagination/Pagination";

const DisplayedList = (props) => {

  const [sortedArray, setSortedArray] = useState([]);

  useEffect(()=> {
    setSortedArray(props.data);
  }, [props.data]);

  //filter
  
  //Sorter section
  
  let sorted = [];
  const sorterHandler = (criteria) => {
    if (criteria === 'brand') {
      sorted = sortedArray.sort((a,b) => {
        const aBrand = a.brand.toLowerCase();
        const bBrand = b.brand.toLowerCase(); 

        if (aBrand < bBrand) {
          return -1;
        }

        if (aBrand > bBrand) {
          return 1;
        }

        return 0;
      }).map(items => items);

      setSortedArray(sorted);
    };

    if(criteria === 'high') {
      sorted = sortedArray.sort((a,b) => {
        let aPrice = Number(a.price).toFixed(2);
        let bPrice = Number(b.price).toFixed(2);
        return (bPrice - aPrice);
      }).map(items => items);

      setSortedArray(sorted);
    };

    if(criteria === 'low') {
      sorted = sortedArray.sort((a,b) => {
        let aPrice = Number(a.price).toFixed(2);
        let bPrice = Number(b.price).toFixed(2);
        return (aPrice - bPrice);
      }).map(items => items);

      setSortedArray(sorted);
    };

    if(criteria === 'best') {
      sorted = sortedArray.sort((a,b) => {
        let aPrice = Number(a.rate).toFixed(1);
        let bPrice = Number(b.rate).toFixed(1);
        return (bPrice - aPrice);
      }).map(items => items);

      setSortedArray(sorted);
    };
  }

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
  

  return (
    <div className={classes.container}>
      
      <div className={classes.actions}>
        <div className={classes.text}>
          <strong>{`${props.data.length} `}</strong>
           items found
        </div>

        <div className={classes.sorter}>
          <Sorter onSorter={sorterHandler}/>
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