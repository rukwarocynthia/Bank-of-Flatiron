import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
