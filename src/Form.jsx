import React, { useState } from 'react'
import DisplayData from './DisplayData'

export default function Form() {
  const [transactionData, setTransactioData] = useState({description:"", category:"", amount:""})

  function handleSubmit(event){
    event.preventDefault()
    setTransactioData({...transactionData, [event.target.name]: event.target.value})
  }

  function Submit(event){
    event.preventDefault()
    setTransactioData({...transactionData, [event.target.name]: event.target.value})
  }

  console.log(transactionData)
  return (
    <div>
        <form onSubmit={Submit}>
          <input type="text" name="description" placeholder="Description" onChange={handleSubmit}/>
          <input type="text" name="category" placeholder="Category" onChange={handleSubmit}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleSubmit}/>
          <button type="submit">Submit</button>
        </form>
        <DisplayData data={transactionData}/>
    </div>
  )
}
