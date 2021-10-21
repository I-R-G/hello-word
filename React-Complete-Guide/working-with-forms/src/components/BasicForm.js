import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: fName,
    valueHasError: fNameHasError,
    inputIsInvalid: fNameIsInvalid,
    inputStyle: fNameInputStyle,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameInputBlurHandler,
    reset: fNameReset,
  } = useForm((input) => input.trim() !== "");

  const {
    value: lName,
    valueHasError: lNameHasError,
    inputIsInvalid: lNameIsInvalid,
    inputStyle: lNameInputStyle,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameInputBlurHandler,
    reset: lNameReset,
  } = useForm((input) => input.trim() !== "");

  const {
    value: email,
    valueHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
    inputStyle: emailInputStyle,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useForm((input) => input.trim() !== "" && input.includes("@"));

  let formIsValid = false;

  if (fNameHasError && lNameHasError && emailHasError) {
    formIsValid = true;
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    fNameReset();
    lNameReset();
    emailReset();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameInputStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            onChange={fNameChangeHandler}
            onBlur={fNameInputBlurHandler}
            value={fName}
          />
          {fNameIsInvalid && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lNameInputStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            onChange={lNameChangeHandler}
            onBlur={lNameInputBlurHandler}
            value={lName}
          />
          {lNameIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Invalid Email entry</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
