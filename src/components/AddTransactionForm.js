
import React, { useState } from "react";

function AddTransactionForm({onAddTransaction}) {

        let[date, setDate]= useState("")
        let[description, setDescription]=useState("")
        let[category, setCategory]=useState("")
        let[amount, setAmount]=useState("")

    function handleSubmit(event){
        event.preventDefault()
        onAddTransaction({date, description, category, amount})
        setDate("")
        setDescription("")
        setCategory("")
        setAmount("")
    }
 
        return(
            <form onSubmit={handleSubmit}>
              <div className="row  p-4 m-4">
                <div className="col-3 mx-auto">
                      <input className="form-control "  type="date"  placeholder="date" value={date}
                       onChange={(event)=> setDate(event.target.value)} required />
                </div>
                <div className="col-3 mx-auto">
                      <input className="form-control  "  type="text" placeholder="Enter description"  value={description}
                       onChange={(event)=> setDescription(event.target.value)} required />
                </div>
                <div className="col-3 mx-auto">
                     <input className="form-control "  type="text" placeholder="Enter category" value ={category}
                      onChange={(event)=> setCategory(event.target.value)}/>
                </div>
                <div className="col-3 mx-auto">
                      <input  className="form-control "  type="number" placeholder="Enter amount" value={amount}
                       onChange={(event)=> setAmount(event.target.value)}/>
                </div>
                <div className="col-5 mx-auto p-4">
                    <button type="submit" className="btn btn-primary">Add Transaction</button>
                </div>
                </div>
            </form>
        )


}
export default AddTransactionForm