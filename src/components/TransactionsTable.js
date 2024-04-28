import React from "react";
import Transactionlists from "./TransactionList";


function TransactionsTable({transactions}){
  
  return(
    <>
    <table className="table table-bordered table-info table-hover">
      <thead>
      <tr>
        <td>Date</td>
        <td>Description</td>
        <td>Category</td>
        <td>Amount</td>
      </tr>
      </thead>
      <tbody>
        <Transactionlists transactions={transactions}/>
      </tbody>
    </table>
    </>
  )
}
    
    export default TransactionsTable;
