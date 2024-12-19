import { useMemo } from 'react';
import { BudgetForm } from './components/BudgetForm';
import { Header } from './components/Header';
import { useBudget } from './hooks/useBudget';
import { BudgetTracker } from './components/BudgetTracker';
import ExpenseModal from './components/ExpenseModal';
import { ExpenseList } from './components/ExpenseList';

const App = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <div className="max-w-3xl mx-auto py-10">
          <ExpenseList />
          <ExpenseModal />
        </div>
      )}
    </>
  );
};

export default App;
