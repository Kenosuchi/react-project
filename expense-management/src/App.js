import Expense from "./components/ExpenseItem";
function App() {
  const expenseItem = {
    title: "Test aa",
    date: new Date(2022, 2, 12),
    price: 294.67,
  };
  return <Expense item={expenseItem}></Expense>;
}

export default App;
