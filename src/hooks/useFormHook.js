"use client"
import { useState } from "react"

const useLoginForm = (validationFn) => {
  
  const [inputValue, setInputValue] = useState('');
  const [isOnBlur, setIsOnBlur] = useState(false);

  const isInputValid = validationFn(inputValue);
  const isFormInputValid = isOnBlur && isInputValid;


  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
  }

  const blurInputHandler = () => {
    setIsOnBlur(true);
  }

  const resetInput = () => {
    setInputValue('');
    setIsOnBlur(false);
  }


  return {
    inputValue,
    isInputValid,
    isFormInputValid,
    inputValueHandler,
    blurInputHandler,
    resetInput,
  }

}

export default useLoginForm;