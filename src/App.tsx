import { useState } from "react";
import ExpenseFilter from "./Expense-tracker/Component/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/Component/ExpenseForm";
import ExpenseList from "./Expense-tracker/Component/ExpenseList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
