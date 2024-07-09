import React, { useState } from 'react';

const CustomerTable = ({ customers, transactions }) => {
  const [filter, setFilter] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => {
            const customerTransactions = transactions.filter(
              txn => txn.customer_id === customer.id
            );
            const totalAmount = customerTransactions.reduce((sum, txn) => sum + txn.amount, 0);
            return (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
