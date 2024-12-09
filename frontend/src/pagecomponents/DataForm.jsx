import React, { useState } from "react";
import "./formAgri.css"
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
          <label style={{fontSize:"1rem"}}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{fontSize:"1rem"}} > Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{fontSize:"1rem"}}>Expenditure:</label>
          <input
            type="number"
            value={expenditure}
            onChange={(e) => setExpenditure(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{width:"8rem",textAlign:"center",marginLeft:"6.5rem"}}>Add</button>
      </form>
    </div>
  );
};

export default DataForm;
