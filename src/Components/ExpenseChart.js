import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './ExpenseTracker.css'; // 🔹 Import the CSS file

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const categories = ['Food', 'Utilities', 'Entertainment', 'Other'];

  const addExpense = () => {
    if (!name || !amount || isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      category,
    };
    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount('');
    setCategory('Food');
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const dataForChart = categories.map((cat) => {
    const total = expenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0);
    return { name: cat, value: total };
  });

  return (
    <div className="expense-container">
      <h2 className="expense-title">Expense Tracker</h2>

      <div className="expense-form">
        <input
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="expense-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="expense-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="expense-select"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addExpense} className="expense-button">Add Expense</button>
      </div>

      <ul className="expense-list">
        {expenses.map((e) => (
          <li key={e.id} className="expense-item">
            {e.name} - ${e.amount.toFixed(2)} ({e.category}){' '}
            <button onClick={() => removeExpense(e.id)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>

      <h3 className="summary-title">Summary</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={dataForChart}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {dataForChart.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseTracker;
