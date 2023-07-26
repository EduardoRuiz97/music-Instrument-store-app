"use client"
import { useState } from "react";
import classes from './Select.module.css';
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = (props) => {

  const [selected, setSelected] = useState(props.default);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const selectOptionHandler = (event) => {
    setSelected(event.target.innerHTML);
    setIsMenuOpen(false);
    props.onOption(event.target.id);
  }

  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <div className={`${classes.select} ${props.className}`}>
      <button type="button" onClick={openMenuHandler}>
        <span>{selected}</span>
        <IoIosArrowDown className={isMenuOpen? `${classes.icon} ${classes.rotate}`: classes.icon}/>
      </button>

      {isMenuOpen && <ul className={classes.options}>
        {props.options.map((item, index) => 
          <li 
          key={index} 
          id={item.value}
          onClick={selectOptionHandler}
          >{item.label}</li>)}
      </ul>}
    </div>
  )
};

export default CustomSelect;