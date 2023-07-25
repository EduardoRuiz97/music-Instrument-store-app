import classes from './Pagination.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = (props) => {

  const backwardsHandler = () => {
    props.onPagination(-1)
  }

  const forwardHandler = () => {
    props.onPagination(1)
  };




  return (
    <div style={{marginLeft: 'auto'}}>
      <IoIosArrowBack 
      className={props.current === 0? `${classes.disabled} ${classes.icon}`: classes.icon}  
      onClick={backwardsHandler}/>
      <IoIosArrowForward 
      className={props.current === Math.floor(props.pages)? `${classes.disabled} ${classes.icon}`: classes.icon} 
      onClick={forwardHandler}/>
  </div>
  )
};

export default Pagination;