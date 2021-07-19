import "./App.css";
import { v4 as uuid } from "uuid";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { useState } from "react";

// const intialExpenses = [
//   {
//     id: uuid(),
//     charge: "rent",
//     amount: 1600,
//   },
//   {
//     id: uuid(),
//     charge: "car wash",
//     amount: 1600,
//   },
//   {
//     id: uuid(),
//     charge: "rent",
//     amount: 1600,
//   },
// ];

const intialExpenses=localStorage.getItem('expenses')?JSON.parse(localStorage.getItem('expenses')):[]

function App() {
  //''''''''''''''''''' for all expenses'''''''''''''''''''''''''''''''''''''''
  const [expenses, setExpenses] = useState(intialExpenses);

  // ''''''''''''''''''''for single expense'''''''''''''''''''''''''''''''''''''''
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  //  ''''''''''''''''''''for alert'''''''''''''''''''''''''''''''''''''''''''''''
  const [alert, setAlert] = useState({ show: false });

  //  ''''''''''''''''''''for Edit''''''''''''''''''''''''''''''''''''''''''''''''''''
  const [edit, setEdit] = useState(false);

  // ''''''''''''''''''''''for edit item'''''''''''''''''''''''''''''''''''''''''''''''
  const [id, setId] = useState(0);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({ type: "success", text: "item Edited" });
        
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }

      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "charge cannot be empty and amount should be greater than 0.",
      });
    }
  };

  // function for clear list
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All Items Deleted" });
  };
  // function for delete item in the list
  const handleDelete = (id) => {
    const tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: " Item Deleted" });
  };
  // function for Edit item in the list
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        ></ExpenseForm>
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        ></ExpenseList>
      </main>
      <h1>
        total spending{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
