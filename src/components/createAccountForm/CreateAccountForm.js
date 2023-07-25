import Button from "../UI/Button/Button";
import classes from './CreateAccountForm.module.css';
import { useSubmit } from "react-router-dom";
import useFormHook from "../../Hooks/useFormHook";
import { useDispatch } from "react-redux";
import { signInActions } from "../../store/signIn-slice/sing-slice";


const CreateAccountForm = () => {

  const submit = useSubmit();
  const dispatch = useDispatch()

  const {
    value: enteredName,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isInputValid: isNameValid,
    isFormFieldInvalid: isNameFieldInvalid,
    resetInput: resetName,
  } = useFormHook(input => input.trim() !== '');

  const {
    value: enteredPhone,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    isInputValid: isPhoneValid,
    isFormFieldInvalid: isPhoneFieldInvalid,
    resetInput: resetPhone,
  } = useFormHook(input => input.trim() !== '' && input.trim().length === 10);

  const {
    value: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isInputValid: isEmailValid,
    isFormFieldInvalid: isEmailFieldInvalid,
    resetInput: resetEmail,
  } = useFormHook(input => input.trim() !== '' && input.includes('@'));

  const {
    value: enteredPassword,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    isInputValid: isPasswordValid,
    isFormFieldInvalid: isPasswordFieldInvalid,
    resetInput: resetPassword,
  } = useFormHook(input => input.trim() !== '' && input.trim().length > 10);


  let isFormValid = false;
  let disabled = true;

  if (!isNameFieldInvalid && !isPhoneFieldInvalid && !isEmailFieldInvalid && !isPasswordFieldInvalid) {
    isFormValid = true;
  };

  if (isNameValid && isPhoneValid && isEmailValid && isPasswordValid) {
    disabled = false;
  };

  let data = {
    id: Math.random(),
    name: enteredName,
    phone: enteredPhone,
    email: enteredEmail,
    password: enteredPassword,
  };


  const submitFormHandler = (event) =>{
    event.preventDefault();

    if (!isFormValid) {
      return;
    } else {
      resetName();
      resetPhone();
      resetEmail();
      resetPassword();

      submit(data, {method:'POST'});
      dispatch(signInActions.signUp());
    }
  }


  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label id="name">Name</label>
        <input 
          type='text' 
          htmlFor='name' 
          placeholder="Name"
          name="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          className={isNameFieldInvalid? classes.wrong : ''}
        ></input>
        {isNameFieldInvalid && <p style={{color:'red', fontSize:'0.8em'}}>Wrong name. Can't be blank.</p>}
      </div>

      <div>
        <label id="phone">Phone number</label>
        <input 
          type='tel' 
          htmlFor='phone' 
          placeholder="Phone number"
          name="phone"
          value={enteredPhone}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          className={isPhoneFieldInvalid? classes.wrong : ''}
        ></input>
          {isPhoneFieldInvalid && <p style={{color:'red', fontSize:'0.8em'}}>Wrong phone number. 10 digits only.</p>}
      </div>

      <div>
        <label id="email">Email address</label>
        <input 
          type='email' 
          htmlFor='email' 
          placeholder="Email address"
          name="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={isEmailFieldInvalid? classes.wrong : ''}
        ></input>
          {isEmailFieldInvalid && <p style={{color:'red', fontSize:'0.8em'}}>Wrong email. Must contain the @ symbol.</p>}
      </div>

      <div>
        <label id="password">Password</label>
        <input 
          type='password' 
          htmlFor='password' 
          placeholder="Password"
          name="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          className={isPasswordFieldInvalid? classes.wrong : ''}
        ></input>
          {isPasswordFieldInvalid && <p style={{color:'red', fontSize:'0.8em'}}>The password must contain at least 10 digits</p>}
      </div>

      <Button disabled={disabled}>Create Account</Button>

    </form>
  );
};

export default CreateAccountForm;