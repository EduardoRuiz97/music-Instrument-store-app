"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classes from './SignInForm.module.css';
import useLoginForm from '@/hooks/useFormHook';
import { useDispatch } from 'react-redux';
import { loggedInActions } from '@/redux/features/autentication';


const SignUpForm = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    inputValue: emailValue,
    isFormInputValid: isEmailValid,
    inputValueHandler: emailValueHandler,
    blurInputHandler: blurEmailHandler,
    resetInput: resetEmail,
  } = useLoginForm(email => email.includes('@') && email.includes('.'));

  const {
    inputValue: passwordValue,
    isFormInputValid: isPasswordValid,
    inputValueHandler: passwordValueHandler,
    blurInputHandler: blurPasswordHandler,
    resetInput: resetPassword,
  } = useLoginForm(password => password.trim().length > 8);

  let isFormValid = false;


  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }


  const submitHandler = (event) => {


    event.preventDefault();

    if(!isFormValid) {
      return;
    }

    const usserInfo = {
      email: emailValue,
      password: passwordValue,
    }

    dispatch(loggedInActions.signUp());
    
    resetEmail();
    resetPassword();
    
    router.push('/home')

  }


  return (
    <div className={classes.container}>

      <div className={classes.layer}>

        <div className={classes.title}>
          <h1>Melody Mart</h1>
          <p>Discover the Perfect Harmony at Melody Mart: Your One-Stop Online Destination for Musical Bliss!</p>
        </div>

        <form className={classes.form} onSubmit={submitHandler}>

          <div className={classes.inputs}>
            <input 
            type='email' 
            placeholder='email' 
            name="email"
            value={emailValue}
            onChange={emailValueHandler}
            onBlur={blurEmailHandler}
            ></input>

            <input 
            type='password' 
            placeholder='password' 
            name="password"
            value={passwordValue}
            onChange={passwordValueHandler}
            onBlur={blurPasswordHandler}
            ></input>
          </div>

          <button disabled={!isFormValid && true}>Sign in</button>

          <Link className="links" href='/signup'>
            <span>Create an account</span>
          </Link>

        </form>

      </div>

    </div>
  )
}

export default SignUpForm;