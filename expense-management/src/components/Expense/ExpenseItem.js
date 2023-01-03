import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (pros) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={pros.item.date} />
      <div className='expense-item__description'>
        <h2>{pros.item.title}</h2>
        <div className='expense-item__amount'>${pros.item.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
