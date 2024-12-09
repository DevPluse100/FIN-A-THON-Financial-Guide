import React, { useState, useEffect } from "react";
import axios from "axios";
import './Account.css';
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Account = () => {
  const [summary, setSummary] = useState({});
  const [logs, setLogs] = useState({ generalLogs: [], healthLogs: [], familyLogs: [] });

  // Fetch data for summary and logs
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/summary");
        setSummary(response.data);
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    };

    const fetchLogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/logs");
        setLogs(response.data.activities);
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };

    fetchSummary();
    fetchLogs();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: ["General", "Health", "Family"],
    datasets: [
      {
        label: "Expenditure (₹)",
        data: [
          summary.breakdown?.generalSpent || 0,
          summary.breakdown?.healthSpent || 0,
          summary.breakdown?.familySpent || 0,
        ],
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
      },
    ],
  };

  return (
    <div className="account-wrapper">
        <h2>Hai😊, Welcome</h2>
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <h2>Account Summary</h2>
          <div className="summary">
            <p><strong>Total Spent:</strong> ₹{summary.totalSpent}</p>
            <p><strong>Remaining Balance:</strong> ₹{summary.remainingBalance}</p>
            <div className="breakdown">
              <p><strong>Agriculture:</strong> ₹{summary.breakdown?.generalSpent}</p>
              <p><strong>Health:</strong> ₹{summary.breakdown?.healthSpent}</p>
              <p><strong>Family:</strong> ₹{summary.breakdown?.familySpent}</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Dashboard</h2>
          <div className="dashboard">
            <Bar data={chartData} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <h2>Activity Logs</h2>
        <div className="logs">
          <div className="log-block">
            <h3>Agriculture Expenditure</h3>
            {logs.generalLogs && logs.generalLogs.map((log, index) => (
              <p key={index}>{log.description} - ₹{log.amount} on {new Date(log.date).toLocaleDateString()}</p>
            ))}
          </div>

          <div className="log-block">
            <h3>Health Expenditure</h3>
            {logs.healthLogs && logs.healthLogs.map((log, index) => (
              <p key={index}>{log.description} - ₹{log.amount} on {new Date(log.date).toLocaleDateString()}</p>
            ))}
          </div>

          <div className="log-block">
            <h3>Family Expenditure</h3>
            {logs.familyLogs && logs.familyLogs.map((log, index) => (
              <p key={index}>{log.description} - ₹{log.amount} on {new Date(log.date).toLocaleDateString()}</p>
            ))}
          </div>
        </div>

        <div className="payment-links">
          <h2>Payment Links</h2>
          <br />
          <a href="https://www.phonepe.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhoneAlt} /> PhonePe
          </a>
          <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} /> Google Pay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Account;
