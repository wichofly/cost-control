import { useBudget } from '../hooks/useBudget';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AmountDisplay } from './AmountDisplay';

export const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget } = useBudget();

  const percentage = Number(((totalExpenses / state.budget) * 100).toFixed(2)); // const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);
  console.log(percentage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor:
              percentage === 100
                ? '#DC2626'
                : percentage >= 75
                ? '#FF8C00'
                : '#00BFFF',
            trailColor: '#D1D5DB',
            textSize: 10,
            textColor:
              percentage === 100
                ? '#DC2626'
                : percentage >= 75
                ? '#FF8C00'
                : '#00BFFF',
          })}
          text={`${percentage}% Expended`}
        />
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
