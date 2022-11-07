import './ExpenseDate.css';

const ExpenseDate = (pros) => {
  const day = pros.date.toLocaleString('en-US', { day: '2-digit' });
  const month = pros.date.toLocaleString('en-US', { month: 'long' });
  const year = pros.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
