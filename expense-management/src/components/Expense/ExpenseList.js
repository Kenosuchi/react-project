import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (pros) => {
  if (pros.expenseItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Expense!</h2>;
  }

  return (
    <ul className='expenses-list'>
      {pros.expenseItems.map((expense) => (
        <ExpenseItem item={expense} key={expense.id}></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
