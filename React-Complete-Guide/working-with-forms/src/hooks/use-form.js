import  { useReducer } from "react";

const initialInputState = {
    value: "",
    isTouched: false
}

function userInputReducer (state, action){
    if(action.type === "INPUT"){
        return {value: action.value, isTouched: state.isTouched}
    }
    if(action.type === "BLUR"){
        return {isTouched: true, value: state.value}
    }
    if(action.type === "RESET"){
        return {value: "", isTouched: false}
    }
    return initialInputState
}

const useForm = (checkInput) => {

   const [inputState, dispatch] = useReducer(userInputReducer, initialInputState)

  
  const valueHasError = checkInput(inputState.value);
  const inputIsInvalid = !valueHasError && inputState.isTouched;
  const inputStyle = inputIsInvalid
    ? "form-control invalid"
    : "form-control";


  function valueChangeHandler(e) {
   dispatch({type: "INPUT", value: e.target.value })
  }

  function inputBlurHandler() {
    dispatch({type: "BLUR"})
  }

  function reset() {
   dispatch({type: "RESET"})
  }

  return {
      value: inputState.value,
      valueHasError,
      inputIsInvalid,
      inputStyle,
      valueChangeHandler,
      inputBlurHandler,
      reset
  }
};

export default useForm;
