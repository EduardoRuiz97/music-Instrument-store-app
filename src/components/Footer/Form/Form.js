import classes from './Form.module.css';

const Form = () => {
  return (
    <form className={classes.form}>
      <input type='text' placeholder="Email"></input>
      <button>Sign up to our newsletter</button>
    </form>
  )
};

export default Form;