import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from '../interfaces/interface';

export interface BudgetState {
  budget: number;
  modal: boolean;
  expenses: Expense[];
}

export type BudgetActions =
  | { type: 'add-budget'; payload: { budget: number } }
  | { type: 'show-modal' }
  | { type: 'close-modal' }
  | { type: 'add-expense'; payload: { expense: DraftExpense } }; // DraftExpense does not have an 'id'. id is generated in the reducer.

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
};

// Create a new expense with a unique id.
const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === 'show-modal') {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === 'close-modal') {
    return {
      ...state,
      modal: false,
    };
  }

  if (action.type === 'add-expense') {
    const newExpense = createExpense(action.payload.expense);

    return {
      ...state,
      expenses: [...state.expenses, newExpense],
      modal: false,
    };
  }

  return state;
};
