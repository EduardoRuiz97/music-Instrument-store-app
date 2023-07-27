import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (

    <div className={classes.backdrop} onClick={props.onClick}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  )
};

export default ModalOverlay;

