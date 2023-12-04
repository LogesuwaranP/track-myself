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

        <h2>Expense of the Month</h2>  
        
        <table>    
            {/* <thead>
                <th>Index</th>
                <th>Title</th>
                <th>Cost</th>
            </thead> */}
            <tbody>
                {expenseList?.map((exp, index)=> <Card id={index} title={exp.title} cost={exp.cost}/>)}
            </tbody>
        </table>


    </div>
  )
}

export default Expense

const Card = ({id, title, cost}) => {

    return(
        <tr key={id} className='expense-card'>
            <td>{id+1}</td>
            <td>{title}</td>
            <td>&#x20b9; {cost}</td>
        </tr>

    );
}