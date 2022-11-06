import React from 'react'
import './Balance.css'
import {useSelector} from 'react-redux';

function Balance() {
  const exp = useSelector((state)=>state.exp)
  return (
    <div className='balance-card'>
        <h1>Balance</h1>
        <h2>{exp.balance}</h2>
    </div>
  )
}

export default Balance