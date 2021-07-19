import { React, useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";


// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "Car payment", amount: 400 },
//   { id: uuid(), charge: "credit Card bill", amount: 1200 },
// ];

const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem("expenses")):[]

function App() {
  //all expenses,add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState("");      
  //single amout
  const [amount, setAmount] = useState("");
  //alert
  const [alert,setAlert] = useState({show:false});
  //edit
  const [edit,setEdit] = useState(false)
  //edit Item
  const [id,setId] = useState(0)
  //**********************Functionality**************************/

  //handle Charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  //handle Amounnt
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  //handle ALert
 const handleAlert = ({type,text})=>{
    setAlert({show:true,type,text});
    setTimeout(()=>{
      setAlert({show:false})
    },7000)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== '' && amount>0){

      if(edit){
        let tempExpenses = expenses.map(item=>{
          return item.id === id ? {...item,charge,amount}:item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({ type: "success", text: "Edited Successfully" });
      }else{
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Item Added" });
      }

      
      setCharge("");
      setAmount("");
    }else{
      //handleAlert called 
      handleAlert({type:'danger',text:`Charge can't be empty value and amount has to be bigger than zero`})
    }
  };

  //clear all items
  const clearItems = ()=>{
    setExpenses([])
    handleAlert({type:'danger',text:'All Items Deleted'})
  };
  //handle Delete
  const handleDelete = (id) =>{
    let tempExpenses = expenses.filter(item=>item.id!==id);
    setExpenses(tempExpenses)
    handleAlert({type:'danger',text:'Item Deleted'})
  }

   const handleEdit = (id) => {
     let expense = expenses.find(item => item.id === id)
     let {charge,amount} = expense;
     setCharge(charge)
     setAmount(amount)
     setEdit(true)
     setId(id)
     console.log(expense);
   };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}   
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
      </main>
      <h1>
        totla spending:
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));  
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
