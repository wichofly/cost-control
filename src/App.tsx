import { useMemo } from 'react';
import { BudgetForm } from './components/BudgetForm';
import { Header } from './components/Header';
import { useBudget } from './hooks/useBudget';
import { BudgetTracker } from './components/BudgetTracker';

const App = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
    </>
  );
};

export default App;
