import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from './ChartCompent.jsx';


const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
      // Fetch data from your backend
      axios.get('http://localhost:8000/api/v1/users/extract') 
        .then(response => {
          setChartData(response.data); 
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="chart-section">
          <ChartComponent data={chartData} />
        </div>
      </div>
    );
  };

  export default Dashboard;