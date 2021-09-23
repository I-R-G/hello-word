import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //const [enteredTitle, setEnteredTitle] = useState("")
  //const [enteredAmount, setEnteredAmount] = useState("")
  //const [enteredDate, setEnteredDate] = useState("")

  //You can join the three states in one const using objects

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(e) {
    //When updating state that depends on the previous state always use this syntax
    //React executes the function, therefore is sure to create a snapshot of the prevState and avoid data loss
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  }

  function amountChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }

  function dateChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: parseFloat(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    //This reset the form fields
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.toggleBack()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type = "button" onClick = {props.toggleBack}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
