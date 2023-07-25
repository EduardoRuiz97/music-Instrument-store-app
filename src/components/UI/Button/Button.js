import classes from  './Button.module.css';

const Button = (props) => {
  return (
    <button 
    className={props.className? props.className : classes.button}
    disabled={props.disabled}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button;