import React, { useState, useEffect } from "react";
import axios from "axios";
import DataForm from "./DataForm.jsx";
import Table from "./Table";
import "./dashagri.css"
const FamilyDashboard = () => {
  const [data, setData] = useState([]); // Stores the family expenditure data
  const [total, setTotal] = useState(0); // Tracks the total adjusted amount

  // Fetch existing data from the backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/find");
        const fetchedData = response.data;

        setData(fetchedData);

        // Calculate the total by subtracting expenditures from amounts
        const initialTotal = fetchedData.reduce(
          (sum, item) => sum + parseFloat(item.amount - item.expenditure),
          0
        );
        setTotal(initialTotal);
      } catch (error) {
        console.error(
          "Error fetching family expenditure data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []); // Run once on component mount

  // Add new expenditure data and update the state
  const handleAddData = async (entry) => {
    try {
      // Send the new entry to the backend
      const response = await axios.post("http://localhost:8000/api/v1/users/addexp", entry);

      // Update the state with the new data and adjust total
      const savedEntry = response.data;
      setData((prevData) => [...prevData, savedEntry]);

      // Adjust the total by subtracting expenditure from the amount
      const adjustedAmount = savedEntry.amount - savedEntry.expenditure;
      setTotal((prevTotal) => prevTotal + adjustedAmount);
    } catch (error) {
      console.error(
        "Error adding new family expenditure data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="dashboard">
      <h2 style={{marginLeft:"2.5rem",marginTop:"8rem"}}> Agriculture Expenditure Dashboard </h2>
      <div className="header">
        <button onClick={() => document.getElementById("data-form").style.display = "block"}>
          Add New Expenditure
        </button>
        <p>Total  Amount: ₹{total}</p>
      </div>
      <Table data={data} />
      <DataForm onAddData={handleAddData} />
    </div>
  );
};

export default FamilyDashboard;
