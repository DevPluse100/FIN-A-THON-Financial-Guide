// import React from "react";
// import "./table.css"

// const Table = ({ data }) => {
//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>Description</th>
//           <th>Amount</th>
//           <th>Expenditure</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((entry, index) => (
//           <tr key={index}>
//             <td>{entry.description}</td>
//             <td>₹{entry.amount.toFixed(2)}</td>
//             <td>₹{entry.expenditure.toFixed(2)}</td>
//             <td>{new Date(entry.date).toLocaleDateString()}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
import React from "react";
import "./table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      {/* <h2 className="table-header">Family Expenditure Dashboard</h2> */}
      <table className="glass-table">
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
    </div>
  );
};

export default Table;
