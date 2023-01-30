import React,{useState} from 'react';
import Expenses from "./component/Expense/Expenses";
import NewExpense from './component/NewExpense/NewExpense';

//taking dummy data inorder to use it on web application 
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    title: "New Mouse",
    amount: 99.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: 794.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 50,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  //we are storing state of dummy expenses data as expenses and update state whenever it changes
 const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense,...prevExpenses];     // returning new array after adding new expense in DUMMY_EXPENSES array 
      })
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses contains = {expenses}/>
    </div>
  );
}

export default App;
