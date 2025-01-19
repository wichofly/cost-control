import { useEffect, useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { BudgetTracker } from '../components/BudgetTracker';
import { BudgetForm } from '../components/BudgetForm';
import { FilterByCategory } from '../components/FilterByCategory';
import { ExpenseList } from '../components/ExpenseList';
import ExpenseModal from '../components/ExpenseModal';

const BudgetTrackerPage = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state.budget));
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <div className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </div>
      )}
    </>
  );
};

export default BudgetTrackerPage;
