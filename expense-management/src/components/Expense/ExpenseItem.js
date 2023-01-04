import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (pros) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={pros.item.date} />
        <div className='expense-item__description'>
          <h2>{pros.item.title}</h2>
          <div className='expense-item__amount'>${pros.item.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
