import React, { useState } from 'react'
import Expense from '../../components/Expense/Expense'
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard'

const Home = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle ?<Expense/>:

      <ExpenseCard/>}
    </div>
  )
}

export default Home
