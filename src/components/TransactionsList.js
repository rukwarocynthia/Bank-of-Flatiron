import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList({ searchTerm }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend API
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete transaction");
        }

        // Remove the deleted transaction from the list
        setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
      })
      .catch((err) => setError(`Delete failed: ${err.message}`)); // Capture delete errors
  };

  const filteredTransactions = transactions.filter((transaction) =>
     transaction.description.toLowerCase().includes((searchTerm || "").toLowerCase())
    );

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              {/* Delete button that calls handleDelete with the transaction ID */}
              <button onClick={() => handleDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
