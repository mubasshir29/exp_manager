import React from 'react'
import './AddButtons.css'
import {useDispatch} from 'react-redux'
import {addBudget, addSpent, addTransaction} from './../../expSlice'

function AddButtons() {
  
  
  const addButton = document.querySelector('.add-btns')
  const closeButton = document.querySelector('.close-button')
  const dispatch = useDispatch();
  
  function handleAddBudget(){
    console.log("Add budget clicked")
    const bmodal = document.querySelector('.budget-modal')
    const budget_amount = document.querySelector('#add-budget-amount').value
    const budget_desc = document.querySelector('#add-description').value
    if(budget_amount != ''){
      dispatch(addBudget(Number.parseInt(budget_amount)))
      dispatch(addTransaction({date: new Date().toDateString(), type:"add", amount:budget_amount, Details:budget_desc}))
    }
    bmodal.classList.toggle('show-modal')
  }
  
  function handleAddSpent(){
    console.log("Add Spent clicked")
    const smodal = document.querySelector('.spent-modal');
    const spent_amount = document.querySelector('#add-spent-amount').value
    const spent_details = document.querySelector('#add-spent-details').value 
    if(spent_amount!= ''){
      dispatch(addSpent(Number.parseInt(spent_amount)))
      dispatch(addTransaction({date: new Date().toDateString(), type:"spent", amount:spent_amount, Details:spent_details}))
    }
    smodal.classList.toggle('show-modal')
  }

  function toggleModal(){
    const smodal = document.querySelector('.spent-modal')
    smodal.classList.toggle('show-modal')
  }

  function addBudgetAmount(event){
    event.preventDefault();
    //document.querySelector('.spent-form'). = '';
    toggleModal()
  }

  function addSpentAmount(event){
    event.preventDefault();
    
  }

  return (
    <>
    <div className='add-buttons-container'>
      <button onClick={handleAddBudget} id='budget' className='add-btns'>+ Budget</button>
      <button onClick={handleAddSpent} id='spent' className='add-btns'>+ Spent</button>
    </div>


    <div className='budget-modal'>
        <div className='modal-content'>
            <span onClick={handleAddBudget} className='close-button'>&times;</span><br/>
            <form className='add-form' action='#'>
            <label>Enter Budget Details</label>
            <input className='modal-input' id='add-budget-amount' placeholder='Enter Amount'></input><br/>
            <input className='modal-input' id='add-description' placeholder='Description'></input><br/>
            <button type='reset' className='budget-input modal-button' onClick={handleAddBudget}>Save</button>
            </form>
        </div>
    </div>


    <div className='spent-modal'>
        <div className='modal-content'>
            <span onClick={handleAddSpent} className='close-button'>&times;</span>
            <br></br>
            <form className='spent-form' action='#'>
              <label>Enter Spent Details</label>
              <input className='modal-input' id='add-spent-amount' placeholder='Enter Amount'></input><br/>
              <input className='modal-input' id='add-spent-details' placeholder='Description'></input><br/>
              <button type='reset' className='budget-input modal-button' onClick={handleAddSpent}>Save</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default AddButtons