import React from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from './ExpenseItem';

const Expense = (pros) => {
  return (
    <Card className='expenses'>
      {pros.expenseItems.map((expense) => (
        <ExpenseItem item={expense} key={expense.id}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expense;
