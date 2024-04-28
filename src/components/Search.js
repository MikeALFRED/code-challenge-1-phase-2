import React from "react";

function Search ({transactions, setTransaction, trans}){

    function HandleChange(event){
        let change= event.target.value
        if(change.length > 0){
        let filter=transactions.filter((transaction)=>{
          return transaction.category.includes(change)
        })
        setTransaction([...filter])
      }else{
      
        setTransaction([...trans])
      }
      }
      
    return(      
    <div className ="m-5 p-10">
      <input onChange={HandleChange} className ="input-group flex-nowrap" type="text" placeholder="Type category"/>
    </div>

    )
}


export default Search