import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const DUMMY_EXPENSE = [
    {
      id: 'e1',
      title: 'Test aa',
      date: new Date(2022, 2, 12),
      price: 294.67,
    },
    {
      id: 'e2',
      title: 'Test bb',
      date: new Date(2022, 6, 12),
      price: 22.67,
    },
    {
      id: 'e3',
      title: 'Test cc',
      date: new Date(2022, 11, 12),
      price: 122.67,
    },
    {
      id: 'e4',
      title: 'Test dd',
      date: new Date(2022, 10, 12),
      price: 224.67,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenseItems={DUMMY_EXPENSE}></Expense>;
    </div>
  );
}

export default App;
