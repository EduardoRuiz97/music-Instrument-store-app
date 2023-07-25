import InstrumentList from "../../InstrumentsList/InstrumentList";
import classes from './InstrumentsSections.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import Sorter from "../../UI/Sorter/Sorter";

const InstrumentsSection = (props) => {

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
  const itemsPerPage = 21;
  const [initialIndex, setInitialIndex] = useState(0);

  const backwardsHandler = () => {
    if (initialIndex !== 0) {
      setInitialIndex(initialIndex - 1);
    }
  }

  const forwardHandler = () => {
    if (initialIndex === Math.floor(maxNumberOfPages)) {
      return;
    }
    setInitialIndex(initialIndex + 1);
  };

  const maxNumberOfPages = sortedArray.length / itemsPerPage;




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
        
        <div style={{marginLeft: 'auto'}}>
          <IoIosArrowBack className={initialIndex === 0 ? `${classes.disabled} ${classes.icon}`: classes.icon} 
          onClick={backwardsHandler}/>
          <IoIosArrowForward 
          className={initialIndex === Math.floor(maxNumberOfPages) ? `${classes.disabled} ${classes.icon}`: classes.icon} 
          onClick={forwardHandler}/>
        </div>
      </div>

      <InstrumentList 
      data={sortedArray} 
      indexIn={initialIndex*itemsPerPage + 1}
      indexFn={initialIndex*itemsPerPage + itemsPerPage}
      />

    </div>
  )
};

export default InstrumentsSection;