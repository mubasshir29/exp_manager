import React from 'react'
import Balance from '../Balance/Balance'
import Budget from '../Budget/Budget'
import Spent from '../Spent/Spent'
import './CardsContainer.css'

function CardsContainer() {
  return (
    <div className='cards-container'>
        <Budget/>
        <Spent/>
        <Balance/>
    </div>
  )
}

export default CardsContainer