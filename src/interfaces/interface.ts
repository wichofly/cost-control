export interface Expense {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: Value;
}

// New type without `id` from `Expense`. It is better to use type.
export type DraftExpense = Omit<Expense, 'id'>;

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface Category {
  id: string;
  name: string;
  icon: string;
}
