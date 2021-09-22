import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)
  

  function clickHandler(){
    setTitle("Updated!")
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/> {/*Not a rule but is a good practice to breakdown components into smaller pieces*/}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick = {clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
