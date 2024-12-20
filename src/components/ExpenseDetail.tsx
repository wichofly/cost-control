import { useMemo } from 'react';
import { formatDate } from '../helper';
import { Expense } from '../interfaces/interface';
import { AmountDisplay } from './AmountDisplay';
import { categories } from '../data/data';

interface ExpenseDetailProps {
  expense: Expense;
}

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  // Find and memoize the category that matches the expense's category ID
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  return (
    <div className="bg-white shadow-lg p-10 w-full flex items-center gap-5 border-b border-gray-200 ">
      <div>
        <img
          src={`/icon_${categoryInfo.icon}.svg`}
          alt="icon expense"
          className="w-20"
        />
      </div>

      <div className="flex-1 space-y-2">
        <p className="text-sm font-semibold uppercase text-slate-500 inline-block border-b border-slate-500">
          {categoryInfo.name}
        </p>
        <p>{expense.expenseName}</p>
        <p>{formatDate(expense.date?.toString() || '')}</p>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  );
};
