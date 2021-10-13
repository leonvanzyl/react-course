import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterYearSelectHandler(filterYear) {
    setFilterYear(filterYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYearSelect={filterYearSelectHandler}
      />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
