import React from 'react'
import './Budget.css'
import {useSelector} from 'react-redux';

function Budget() {
  const exp = useSelector((state)=>state.exp)
  console.log(exp.transactions)
  return (
    <div className='budget-card'>
        <h1>Budget</h1>
        <h2>{exp.budget}</h2>
    </div>
  )
}

export default Budget