import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
      return <h1 className = "expenses-list__fallback">You have no expenses this year yet</h1>
  }

  return (
    <ul className = "expenses-list">
      {props.filteredExpenses.map((expense) => {
        return (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
