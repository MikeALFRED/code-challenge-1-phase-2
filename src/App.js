import  React, {useState} from 'react';
import Search from './components/Search';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionTable from './components/TransactionsTable';
import './App.css';




function App() {

  let trans=[
       { id: 1,
           date: "05/Jan/2020",
          description: "Movies",
        category: "Entertainment",
        amount: "1000"

      },
  
      {
        id: 2,
        date: "19/Apr/2021",
        description: "Chipotle",
        category: "Food",
      amount: "700"



      } ,           
  
      {
      id: 3,
      date: "12/May/2023",
    description: "Grocery ",
    category: "Income",
      amount: "950"

       },

       {
          id: 4,
            date: "09/Dec/2019",
            description: "Uber ride",
            category: "Transportation",
            amount: "550"
       }
  ]
  let [transactions, setTransaction]=useState(trans)

  let handleAddTransaction=(newTransaction)=>{
    setTransaction([...transactions, newTransaction])
  }


return(
  <>
  <nav className='navbar navbar-expand-lg bg-primary'>
    <div className='contaier-fluid'>
      <span className='navbar-text '>The Royal Bank of Flatiron</span>
    </div>
  </nav>
  <div className='container'>
    <Search transactions={transactions} setTransaction={setTransaction}  trans={trans}/>
    <AddTransactionForm onAddTransaction={handleAddTransaction}/>
    <TransactionTable transactions={transactions}/>
</div>
  </>
)
 
}

export default App;
