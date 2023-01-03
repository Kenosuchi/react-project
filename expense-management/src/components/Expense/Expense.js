import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
const years = [
  { id: 'y2', value: 2022 },
  { id: 'y1', value: 2021 },
  { id: 'y0', value: 2020 },
];
const Expense = (pros) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onFilterSelected = (filterSelected) => {
    setFilteredYear(filterSelected);
  };

  const filterExpenses = pros.expenseItems.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>No Expense Found!</p>;
  if (filterExpenses.length > 0) {
    expenseContent = filterExpenses.map((expense) => (
      <ExpenseItem item={expense} key={expense.id}></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          years={years}
          selected={filteredYear}
          onFilterSelected={onFilterSelected}
        ></ExpenseFilter>
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expense;
