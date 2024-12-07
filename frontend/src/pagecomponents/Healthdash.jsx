import React, { useState, useEffect } from "react";
import axios from "axios";
import DataForm from "./DataForm.jsx";
import Table from "./Table";

const HealthDashboard = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch existing data on initial load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/findheal");
        const fetchedData = response.data;

        setData(fetchedData);

        // Calculate total from fetched data
        const initialTotal = fetchedData.reduce(
          (sum, item) => sum + parseFloat(item.amount),
          0
        );
        setTotal(initialTotal);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const handleAddData = async (entry) => {
    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:8000/api/v1/users/addhealexp", entry);

      // Update the state with the new data
      const savedEntry = response.data;
      setData((prevData) => [...prevData, savedEntry]);
      setTotal((prevTotal) => prevTotal + parseFloat(savedEntry.amount));
    } catch (error) {
      console.error("Error adding data:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="dashboard">
      <h2>Health Expenditure Data</h2>
      <div className="header">
        <button onClick={() => document.getElementById("data-form").style.display = "block"}>
          Enter New Data
        </button>
        <p>Total: ₹{total}</p>
      </div>
      <Table data={data} />
      <DataForm onAddData={handleAddData} />
    </div>
  );
};

export default HealthDashboard;
