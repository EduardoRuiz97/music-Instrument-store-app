"use client"
import classes from "./ItemSlide.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideItem from './SlideItem';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';



const ItemSlide = (props) => {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 1024, min: 920 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 920, min: 650 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 650, min: 375 },
        items: 1
      }
    };

  return (
    <div className={classes.container} id={props.id}>

      <span className={classes.span}>{props.info.span}</span>
      <h2>{props.info.h2}</h2>
      <p>{props.info.parag}</p>

      <Carousel responsive={responsive} className={classes.carousel}>
        {props.info.array.map(item => <SlideItem items={item} key={item.id}/>)}
      </Carousel>
    </div>
  )
}

export default ItemSlide;