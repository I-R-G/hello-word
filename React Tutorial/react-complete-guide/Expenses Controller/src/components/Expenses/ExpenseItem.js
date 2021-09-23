import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date = {props.date}/> {/*Not a rule but is a good practice to breakdown components into smaller pieces*/}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
