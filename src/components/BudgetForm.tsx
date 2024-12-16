import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'add-budget', payload: { budget } });
  };

  return (
    <form className="space-y-5 text-center" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-sky-600 font-semibold "
        >
          Define Budget
        </label>
        <input
          id="budget"
          type="number"
          name="budget"
          placeholder="Define your budget"
          value={budget}
          onChange={handleChange}
          className="w-full bg-white border border-gray-200 p-2 rounded-lg"
        />
      </div>

      <input
        type="submit"
        value="Define budget"
        className="bg-sky-500 hover:bg-sky-600 w-full p-2 text-white font-semibold uppercase rounded-lg cursor-pointer disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
};
