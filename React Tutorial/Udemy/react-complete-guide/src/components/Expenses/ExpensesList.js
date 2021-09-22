import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card"

function ExpensesList(props) {
  const data = props.data;

  return (
    <Card className="expenses">
      {data.map((expense) => {
        return (
          <ExpenseItem
            key = {expense.id}
            date = {expense.date}
            title = {expense.title}
            amount = {expense.amount}
          />
        );
      })}
    </Card>
  );
}

export default ExpensesList;
