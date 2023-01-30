import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    if(props.items.length === 0 ){
       return <h2 className='expenses-list__fallback'>Found No Expense</h2>
    };

    return <ul className = "expenses-list">
       {props.items.map((expense) => (
        <ExpenseItem
          key = {expense.id}            //it is very important attribute inorder to use map method because react don't know where to add new 
          title={expense.title}         //expense in DUMMY_EXPENSES i.e why it through a warning that you should have key prop when you donot
          amt={expense.amount}          // use key attribute in ExpenseItem
          date={expense.date}
        />
       ))}
    </ul>
};

export default ExpensesList;