import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
const years = [
  { id: 'y2', value: 2022 },
  { id: 'y1', value: 2021 },
  { id: 'y0', value: 2020 },
];
const Expense = (pros) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const onFilterSelected = (filterSelected) => {
    setFilteredYear(filterSelected);
  };

  const filterExpenses = pros.expenseItems.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          years={years}
          selected={filteredYear}
          onFilterSelected={onFilterSelected}
        ></ExpenseFilter>
        <ExpenseList expenseItems={filterExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expense;
