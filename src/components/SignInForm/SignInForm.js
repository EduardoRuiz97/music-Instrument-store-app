import { Link, useNavigate} from "react-router-dom";
import classes from './SignInForm.module.css';
import useFormHook from "../../Hooks/useFormHook";
import { useDispatch } from "react-redux";
import { signInActions } from "../../store/signIn-slice/sing-slice"



const SignUpForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {
    value: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    isInputValid: isEmailValid,
    resetInput: resetEmail,
  } = useFormHook(input => input.trim() !== '' && input.includes('@'));

  const {
    value: enteredPassword,
    inputChangeHandler: passwordChangeHandler,
    isInputValid: isPasswordValid,
    resetInput: resetPassword,
  } = useFormHook(input => input.trim() !== '' && input.trim().length > 10);

  let formIsValid = false;

  if (isEmailValid && isPasswordValid) {
    formIsValid = true;
  } 

  const submitFormHandler = (event) => {

    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    navigate('/')
    dispatch(signInActions.SignIn());
    resetEmail();
    resetPassword();
  }

  return (
    <div className={classes.container}>

      <div className={classes.layer}>

        <div className={classes.title}>
          <h1>Melody Mart</h1>
          <p>Discover the Perfect Harmony at Melody Mart: Your One-Stop Online Destination for Musical Bliss!</p>
        </div>

        <form className={classes.form} onSubmit={submitFormHandler}>

          <div className={classes.inputs}>
            <input 
            type='email' 
            placeholder='email' 
            name="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            ></input>

            <input 
            type='password' 
            placeholder='password' 
            name="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            ></input>
          </div>

          <button disabled={!formIsValid && true}>Sign in</button>

          <Link className="links" to='/create-account'>
            <span>Create an account</span>
          </Link>

        </form>

      </div>

    </div>
  )
}

export default SignUpForm;