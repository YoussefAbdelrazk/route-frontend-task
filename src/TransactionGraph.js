import React from 'react';
import { Line } from 'react-chartjs-2';

const TransactionGraph = ({ transactions }) => {
  const dates = [...new Set(transactions.map(txn => txn.date))];
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Total Transactions',
        data: dates.map(date => {
          return transactions
            .filter(txn => txn.date === date)
            .reduce((sum, txn) => sum + txn.amount, 0);
        }),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default TransactionGraph;
