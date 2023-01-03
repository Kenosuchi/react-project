import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (pros) => {
  const onChangeFilter = (event) => {
    pros.onFilterSelected(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={pros.selected} onChange={onChangeFilter}>
          {pros.years.map((year) => (
            <option value={year.value} key={year.id}>
              {year.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
