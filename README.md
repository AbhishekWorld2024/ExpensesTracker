# ExpensesTracker
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Expense Tracker - React</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
      max-width: 800px;
      margin: auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    ul {
      padding-left: 20px;
    }
    code {
      background-color: #eaeaea;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>

  <h1>📊 Expense Tracker (React.js)</h1>

  <p>
    A simple and interactive Expense Tracker web application built with <strong>React.js</strong> and <strong>Recharts</strong>. 
    This app allows users to efficiently manage their daily expenses, categorize them, and visualize spending patterns using a Pie Chart.
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>✅ Add new expenses with name, amount, and category</li>
    <li>✅ Delete expenses</li>
    <li>✅ Categorize expenses (Food, Utilities, Entertainment, Other)</li>
    <li>✅ Real-time Pie Chart visualization using Recharts</li>
    <li>✅ Responsive design with clean and modern UI</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js</li>
    <li><strong>State Management:</strong> <code>useState</code>, <code>useEffect</code></li>
    <li><strong>Charts:</strong> <a href="https://recharts.org/en-US/" target="_blank">Recharts</a></li>
    <li><strong>Styling:</strong> CSS (custom styles)</li>
  </ul>

  <h2>📂 Folder Structure</h2>
  <pre>
📁 src
 ┣ 📄 ExpenseTracker.js
 ┣ 📄 ExpenseTracker.css
 ┣ 📄 App.js
 ┗ 📄 index.js
  </pre>

  <h2>📦 Installation & Setup</h2>
  <pre>
# Clone the repository
git clone https://github.com/yourusername/expense-tracker-app.git

# Navigate to the folder
cd expense-tracker-app

# Install dependencies
npm install

# Run the application
npm start
  </pre>

  <h2>📸 Preview</h2>
  <p><em>(Optional: Add a screenshot of the app here)</em></p>

  <h2>💡 Future Enhancements</h2>
  <ul>
    <li>Add login functionality for individual expense tracking</li>
    <li>Add persistent storage with localStorage or Firebase</li>
    <li>Export data as CSV</li>
  </ul>

</body>
</html>
