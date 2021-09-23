import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function handleFilterChange(year) {
    setFilteredYear(year);
  }

  //Its a good practice to avoid putting to much logic inside the JSX code
  //So instead we insert the logic before return the JSX statement
  const data = props.data.filter(
    (expense) => expense.date.getFullYear() === parseFloat(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesChart expenses={data} />
        <ExpensesList filteredExpenses={data} />
      </Card>
    </div>
  );
}

export default Expenses;
