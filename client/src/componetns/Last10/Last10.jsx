import React from 'react'
import './Last10.css'
//import last10 from '../../data/last10'
import {useSelector} from 'react-redux';

function Last10() {
    const exp = useSelector((state)=>state.exp)
    const transactions = exp.transactions;
    const last10 = transactions.slice(0).reverse().map(element => element).slice(0,10)
  return (
    <div className='last10-container'>
        <div className='title-container'>
        <h3 className='table-title'>Last transactions</h3>
        <h5 className='sub-title'><a href='/all-transactions'>List all transactions</a></h5>
        </div>
        <table className='transaction-table'>
            <tr>
                <th className='table-field date-field'>Date</th>
                <th className='table-field type-field'>Type</th>
                <th className='table-field amount-field'>Amount</th>
                <th className='table-field details-field'>Details</th>
            </tr>
            <tbody>
                {last10.map((entry,index) => 
                    <tr key={index}>
                        <td>{entry.date}</td>
                        <td>{entry.type}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.Details}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default Last10