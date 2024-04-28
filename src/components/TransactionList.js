import React from "react";

function Transactionlists({transactions}){

    let trans= transactions.map((transaction)=>{

        return(
            <tr key={transaction.id}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
        )

    })
    return(
        <>
      {trans}
    </>

    )
}
export default Transactionlists