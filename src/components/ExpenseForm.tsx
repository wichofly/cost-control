import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { categories } from '../data/data';
import { useBudget } from '../hooks/useBudget';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { DraftExpense, Value } from '../interfaces/interface';
import { ErrorMessage } from './ErrorMessage';

export const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: '',
    amount: 0,
    category: '',
    date: new Date(),
  });
  const [error, setError] = useState('');
  const { state, dispatch } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];

      setExpense(editingExpense);
    }
  }, [state.editingId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ['amount'].includes(name); // in amount is true, in the other labels is false

    setExpense({
      ...expense,
      [name]: isAmountField ? Number(value) : value, // Number(value) = +value
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes('')) {
      setError('All fields are required');
      return;
    }

    // Dispatch the action to add the expense
    dispatch({ type: 'add-expense', payload: { expense } });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-semibold border-b-2 border-blue-500 py-2">
        New Expense
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

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
          value={expense.expenseName}
          onChange={handleChange}
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
          value={expense.amount}
          onChange={handleChange}
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
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">--- Select ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dateExpended" className="text-xl">
          Date Expended:
        </label>
        <DatePicker
          value={expense.date}
          className="bg-slate-100 p-2 rounded-md border-0"
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-semibold rounded-md"
        value="Register Expense"
      />
    </form>
  );
};
