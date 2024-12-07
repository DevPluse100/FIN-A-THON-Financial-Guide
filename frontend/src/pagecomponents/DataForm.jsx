import React, { useState } from "react";

const DataForm = ({ onAddData }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenditure, setExpenditure] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !expenditure) {
      alert("Please fill in all fields");
      return;
    }

    const newEntry = { description, amount: parseFloat(amount), expenditure: parseFloat(expenditure) };
    onAddData(newEntry);

    // Clear the form fields
    setDescription("");
    setAmount("");
    setExpenditure("");
    document.getElementById("data-form").style.display = "none";
  };

  return (
    <div id="data-form" style={{ display: "none" }}>
      <h3>Add New Expenditure</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expenditure:</label>
          <input
            type="number"
            value={expenditure}
            onChange={(e) => setExpenditure(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DataForm;
