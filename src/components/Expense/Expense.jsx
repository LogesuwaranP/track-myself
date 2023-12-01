import React, { useEffect, useState } from 'react'

const Expense = () => {
    
    var data = "petrol"
    const [expense, setExpense] = useState({});

    const [expenseList, setExpenseList] = useState([]);

    const handleOnChange = (e) => {
        data = e.target.value;
    }
    
    useEffect(()=>{
        const data = sessionStorage.getItem("Expense_List")

        setExpenseList(JSON.parse(data))

    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const makedata = [...expenseList, expense];
        setExpenseList(makedata)
        sessionStorage.setItem("Expense_List",  JSON.stringify(makedata))
    }


  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input placeholder='title'  onChange={(e)=>setExpense({...expense, title:e.target.value})} /> <br/>
            <input placeholder='amount' type='number' onChange={(e)=>setExpense({...expense, cost:e.target.value})}/> <br/>
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
        <br/>  
        {expense.title} - {expense.cost}

        <hr />
        <h1>List data </h1>
        {expenseList?.map((exp)=> <p>{exp.title} - {exp.cost}</p>)}

        {/* {data} */}

    </div>
  )
}

export default Expense
