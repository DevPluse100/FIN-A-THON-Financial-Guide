import React from "react";

const Table = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Expenditure</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.description}</td>
            <td>₹{entry.amount.toFixed(2)}</td>
            <td>₹{entry.expenditure.toFixed(2)}</td>
            <td>{new Date(entry.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
