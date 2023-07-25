import FilterByBrand from "./FilterByBrand/FilterByBrand";
import FilterByPrice from "./FilterByPrice/FilterByPrice";
import classes from './AsideFilter.module.css';
import { useState } from "react";

const AsideFilter = (props) => {

  const [isFirstFilterOpen, setIsFirstFilterOpen] = useState(false);
  const [isSecondFilterOpen, setIsSecondFilterOpen] = useState(false);

  const changeHandler = (criteria) => {
    props.onFilter(criteria);
  };


  const clickHandler = () => {
    props.onReset();
  }

  const openFirstFilter = () => {
    setIsFirstFilterOpen(!isFirstFilterOpen)
  }

  const openSecondFilter = () => {
    setIsSecondFilterOpen(!isSecondFilterOpen)
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <ul className={classes.list}>
          <li className={classes.item} onClick={openFirstFilter}>
            <span>Filter by brand</span>
            <FilterByBrand brand={props.data} selected={changeHandler} isOpen={isFirstFilterOpen}/>
          </li>

          <li className={classes.item} onClick={openSecondFilter}>
            <span>Filter by price</span>
            <FilterByPrice selected={changeHandler} isOpen={isSecondFilterOpen}/>
          </li>
        </ul>

        <button type='reset' onClick={clickHandler}>reset</button>
      </form>
    </div>
  )
};

export default AsideFilter