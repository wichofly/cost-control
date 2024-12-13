import { ChangeEvent, useState } from 'react';

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  return (
    <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
      <form className="space-y-5 text-center">
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
          className="bg-sky-500 hover:bg-sky-600 w-full p-2 text-white font-semibold uppercase rounded-lg cursor-pointer"
        />
      </form>
    </section>
  );
};
