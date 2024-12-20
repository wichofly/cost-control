import { createContext, Dispatch } from 'react';
import { BudgetActions, BudgetState } from '../reducers/budgetReducer';

interface BudgetContextProps {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
}

export const BudgetContext = createContext<BudgetContextProps>(null!);
