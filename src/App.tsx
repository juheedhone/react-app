import { useState } from "react";
import ExpenseList from "./Expence-tracker/Component/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aa",
      amount: 10,
      category: "utilities",
    },
    {
      id: 2,
      description: "ba",
      amount: 10,
      category: "utilities",
    },
    {
      id: 3,
      description: "cc",
      amount: 10,
      category: "utilities",
    },
    {
      id: 4,
      description: "dd",
      amount: 10,
      category: "utilities",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
