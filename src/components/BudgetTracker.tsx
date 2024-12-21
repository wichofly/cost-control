import { useBudget } from '../hooks/useBudget';
import { AmountDisplay } from './AmountDisplay';

export const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/graph.jpg" alt="Expense graph" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-semibold rounded-lg"
        >
          Restart App
        </button>
        <AmountDisplay label="Budget" amount={state.budget} />
        <AmountDisplay label="Available" amount={remainingBudget} />
        <AmountDisplay label="Spent" amount={totalExpenses} />
      </div>
    </div>
  );
};
