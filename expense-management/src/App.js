import React, { useState } from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Test aa',
    date: new Date(2022, 2, 12),
    amount: 294.67,
  },
  {
    id: 'e2',
    title: 'Test bb',
    date: new Date(2022, 6, 12),
    amount: 22.67,
  },
  {
    id: 'e3',
    title: 'Test cc',
    date: new Date(2022, 11, 12),
    amount: 122.67,
  },
  {
    id: 'e4',
    title: 'Test dd',
    date: new Date(2022, 10, 12),
    amount: 224.67,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenseItems={expenses}></Expense>;
    </div>
  );
};

export default App;
