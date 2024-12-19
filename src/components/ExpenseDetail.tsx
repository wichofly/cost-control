import { formatDate } from '../helper';
import { Expense } from '../interfaces/interface';
import { AmountDisplay } from './AmountDisplay';

interface ExpenseDetailProps {
  expense: Expense;
}

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  return (
    <div className="bg-white shadow-lg p-10 w-full flex items-center gap-5 border-b border-gray-200 ">
      <div></div>

      <div>
        <p>{expense.expenseName}</p>
        <p>{formatDate(expense.date?.toString() || '')}</p>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  );
};
