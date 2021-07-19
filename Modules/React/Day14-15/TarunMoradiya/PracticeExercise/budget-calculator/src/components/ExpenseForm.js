import React from "react";
import { MdSend } from "react-icons/md";

export default function ExpenseForm({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
            className="form-control"
          />
        </div>
      </div>
      <button className="btn">
        {edit ? "edit" : "submit"} <MdSend className="btn-icon" />
      </button>
    </form>
  );
}
