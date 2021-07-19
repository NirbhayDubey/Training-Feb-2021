import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";
const initialExpenses = [
  // { id: uuidv4(), charge: "rent", amount: 1600 },
  // { id: uuidv4(), charge: "card payment", amount: 400 },
  // { id: uuidv4(), charge: "cedit card bill", amount: 1200 },
];

function App() {
  // set expenses
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expenses
  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState("");

  // alers
  const [alert, setAlert] = useState({ show: false });

  // edit
  const [edit, setEdit] = useState(false);

  // id
  const [id, setId] = useState(0);

  // functionality
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
    });
  };

  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleDelete = (id) => {
    const sortData = expenses.filter((item) => item.id !== id);
    setExpenses(sortData);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        setCharge("");
        setAmount("");
      } else {
        const singleExpenses = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpenses]);
        handleAlert({ type: "success", text: "item added" });
        setCharge("");
        setAmount("");
      }
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount will be zero or more`,
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, cur) => {
            return (acc += parseInt(cur.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}
export default App;
