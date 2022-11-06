import React from 'react'
import './Spent.css'
import {useSelector} from 'react-redux';

function Spent() {
  const exp = useSelector((state)=>state.exp)
  return (
    <div className='spent-card'>
        <h1>Spent</h1>
        <h2>{exp.spent}</h2>
    </div>
  )
}

export default Spent