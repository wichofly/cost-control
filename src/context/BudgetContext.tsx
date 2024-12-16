import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import {
  BudgetState,
  BudgetActions,
  budgetReducer,
  initialState,
} from '../reducers/budgetReducer';

interface BudgetContextProps {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
}

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
