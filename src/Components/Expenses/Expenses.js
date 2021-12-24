import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = () => {
    const Allexpenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { 
          id: 'e2', 
          title: 'New TV', 
          amount: 799.49, 
          date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
      const [years,setYears]=useState('2021')
      const [expenses,setExpenses]=useState(Allexpenses)
      const filtered=expenses.filter(exp=>exp.date.getFullYear().toString()===years)


      

      const handleFilterChange=year=>{
          setYears(year)
  
      }
    return (
        <div className='expenses'>
            <ExpensesFilter year={years} handleFilterChange={handleFilterChange}></ExpensesFilter>
            {
                filtered.map(expense=><ExpenseItem expense={expense}></ExpenseItem>)
            }
         
        </div>
    );
};

export default Expenses;