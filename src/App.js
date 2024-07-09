import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable';
import TransactionGraph from './TransactionGraph';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerRes = await axios.get('http://localhost:3001/customers');
        const transactionRes = await axios.get('http://localhost:3001/transactions');
        setCustomers(customerRes.data);
        setTransactions(transactionRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CustomerTable customers={customers} transactions={transactions} />
      <TransactionGraph transactions={transactions} />
    </div>
  );
};

export default App;
