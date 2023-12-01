import React, { useEffect, useState } from 'react'
import './Expense.css'
const Expense = () => {
    
    const [expense, setExpense] = useState({});
    const [expenseList, setExpenseList] = useState([]);
    
    useEffect(()=>{
        const data = sessionStorage.getItem("Expense_List")
        setExpenseList(JSON.parse(data))

    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(expense.title==='' || expense.cost===''){
            alert("eds")
            return
        }
        
        var makedata;
        if(expenseList?.length>0){
            makedata = [...expenseList, expense];
        }else{
            makedata = [expense]
        }
        setExpenseList(makedata)
        sessionStorage.setItem("Expense_List",  JSON.stringify(makedata))
    }


  return (
    <div className='expense-container'>

        <form onSubmit={handleSubmit}>
            <label>Enter the Title</label>
            <input placeholder='Title'  onChange={(e)=>setExpense({...expense, title:e.target.value})} /> <br/>
            <label>Enter the Cost</label>
            <input placeholder='Amount' type='number' onChange={(e)=>setExpense({...expense, cost:e.target.value})}/> <br/>
            <button className='btn-primary' onSubmit={handleSubmit}>Submit</button>
        </form>
        <br/>

        <hr />
        <br/>

        
        <ol>   
            <h2>Expense of the Month</h2>  
            <br/>    
            {expenseList?.map((exp, index)=> <Card key={index} title={exp.title} cost={exp.cost}/>)}
        </ol>


    </div>
  )
}

export default Expense

const Card = ({id, title, cost}) => {

    return(
        <li key={id}>
            {title} - {cost}
        </li>

    );
}