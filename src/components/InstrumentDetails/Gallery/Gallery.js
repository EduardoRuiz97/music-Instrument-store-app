import { useState } from "react";
import classes from  './Gallery.module.css';


const Gallery = (props) => {

  const [index, setIndex] = useState(0);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const selectedImg = (event) => {
    setIndex(event.target.id)
  }

  const mouseOver = () => {
    setIsOnFocus(true);
  }

  const mouseOut = () => {
    setIsOnFocus(false);
  }


  return (
    <div className={classes.gallery}>

      <div className={classes.mainImg} onMouseOver={mouseOver}>
        <img src={props.selected.img[index]} alt={props.selected.model}></img>
      </div>

      <div className={classes.options} onMouseOver={mouseOver} onMouseOut={mouseOut}>
        {props.selected.img.map((item,index) => 
        <img 
        src={item} 
        alt='gallery images to selected to view' 
        onClick={selectedImg} 
        key={index}
        id={index}
        className={isOnFocus? classes.focused : classes.offFocused}
        ></img>)}
      </div>

    </div>
  )
};


export default Gallery;