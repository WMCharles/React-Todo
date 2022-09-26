import React from 'react'

export default function DisplayData({data}) {
  return (
    <table>
        <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
        {data.map((item) => 
            <tr>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
            </tr>
        )}
    </table>
  )
}
