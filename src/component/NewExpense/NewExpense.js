import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
   const [isEditing, setIsEditing] = useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
           ...enteredExpenseData,
           id : Math.random().toString(),
        };
      props.onAddExpense(expenseData);
   };

   const startEditingHandle = () => {
      setIsEditing(true);
   }

   const stopEditingHandle = () => {
      setIsEditing(false);
   }

    return (
       <div className='new-expense'>
         {!isEditing && (
           <button onClick = {startEditingHandle}>Add New Expene</button>
         )}
         {isEditing && (
          <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandle}/>
         )}
       </div>
    );
};

export default NewExpense;