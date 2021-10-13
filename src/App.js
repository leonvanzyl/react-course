import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.2,
    date: new Date(2021, 9, 4),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 999.99,
    date: new Date(2021, 8, 1),
  },
  {
    id: "e3",
    title: "New TB",
    amount: 677.99,
    date: new Date(2020, 8, 2),
  },
  {
    id: "e4",
    title: "Dog collar",
    amount: 50,
    date: new Date(2021, 11, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  function addExpenseHandler(expense) {
    console.log("Main App", expense);

    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
