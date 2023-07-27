"use client"
import useLoginForm from "@/hooks/useFormHook";
import { useRouter } from "next/navigation";
import Button from "../UI/Button/Button";
import classes from './CreateAccountForm.module.css';
import { loggedInActions } from "@/redux/features/autentication";
import { useDispatch } from "react-redux";


const CreateAccountForm = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    inputValue: nameValue,
    isInputValid: isNameValid,
    isFormInputValid : isNameInputValid,
    inputValueHandler: nameValueHandler,
    blurInputHandler: blurNameHandler,
    resetInput: resetName,
  } = useLoginForm(input => input !== '');

  const {
    inputValue : phoneValue,
    isInputValid : isPhoneValid,
    isFormInputValid : isPhoneInputValid,
    inputValueHandler : phoneValueHandler,
    blurInputHandler : blurPhoneHandler,
    resetInput : resetPhone,
  } = useLoginForm(input => input.trim().length === 10);

  const {
    inputValue : emailValue,
    isInputValid : isEmailValid,
    isFormInputValid : isEmailInputValid,
    inputValueHandler : emailValueHandler,
    blurInputHandler : blurEmailHandler,
    resetInput : resetEmail,
  } = useLoginForm(input => input.includes('@') && input.includes("."));

  const {
    inputValue : passwordValue,
    isInputValid : isPasswordValid,
    isFormInputValid : isPasswordInputValid,
    inputValueHandler : passwordValueHandler,
    blurInputHandler : blurPasswordHandler,
    resetInput : resetPassword,
  } = useLoginForm(input => input.trim().length > 10);


  let isFormValid = false;

  if (isNameInputValid && isPhoneInputValid && isEmailInputValid && isPasswordInputValid) {
    isFormValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();


    if (!isFormValid) {
      return;
    }

    const usserNewAccountData = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue,
    }

    dispatch(loggedInActions.signUp());
    router.push('/home');

    resetName();
    resetPhone();
    resetEmail();
    resetPassword();

  }



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label id="name">Name</label>
        <input 
          type='text' 
          htmlFor='name' 
          placeholder="Name"
          name="name"
          value={nameValue}
          onChange={nameValueHandler}
          onBlur={blurNameHandler}
        ></input>
        {!isNameValid && <p style={{color:'red', fontSize:'0.8em'}}>Can't be blank.</p>}
      </div>


      <div>
        <label id="phone">Phone number</label>
        <input 
          type='tel' 
          htmlFor='phone' 
          placeholder="Phone number"
          name="phone"
          value={phoneValue}
          onChange={phoneValueHandler}
          onBlur={blurPhoneHandler}
        ></input>
          {!isPhoneValid && <p style={{color:'red', fontSize:'0.8em'}}>10 digits only.</p>}
      </div>

      <div>
        <label id="email">Email address</label>
        <input 
          type='email' 
          htmlFor='email' 
          placeholder="Email address"
          name="email"
          value={emailValue}
          onChange={emailValueHandler}
          onBlur={blurEmailHandler}
        ></input>
          {!isEmailValid && <p style={{color:'red', fontSize:'0.8em'}}>Must contain the @ symbol.</p>}
      </div>

      <div>
        <label id="password">Password</label>
        <input 
          type='password' 
          htmlFor='password' 
          placeholder="Password"
          name="password"
          value={passwordValue}
          onChange={passwordValueHandler}
          onBlur={blurPasswordHandler}
        ></input>
          {!isPasswordValid && <p style={{color:'red', fontSize:'0.8em'}}>The password must contain at least 10 digits</p>}
      </div>

      <Button disabled={!isFormValid && true}>Create Account</Button>

    </form>
  );
};

export default CreateAccountForm;