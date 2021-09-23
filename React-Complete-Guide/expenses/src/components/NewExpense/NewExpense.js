import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const [isClicked, setIsClicked] = useState(false);

  function toggleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="new-expense">
      {!isClicked && <button onClick={toggleClick}>Add new expense</button>}
      {isClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleBack={toggleClick}
        />
      )}
    </div>
  );
}

export default NewExpense;
