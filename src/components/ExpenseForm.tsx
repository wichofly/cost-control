import { categories } from '../data/data';

export const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-semibold border-b-2 border-blue-500 py-2">
        New Expense
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Write the name of the expense"
          name="expenseName"
          className="bg-slate-100 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add the amount of expense"
          name="amount"
          className="bg-slate-100 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select
          id="category"
          name="category"
          className="bg-slate-100 rounded-md p-2"
        >
          <option value="">--- Select ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-semibold rounded-md"
      />
    </form>
  );
};
