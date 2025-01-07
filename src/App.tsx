import { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BudgetForm } from './components/BudgetForm';
import { Header } from './components/Header';
import { useBudget } from './hooks/useBudget';
import { BudgetTracker } from './components/BudgetTracker';
import ExpenseModal from './components/ExpenseModal';
import { ExpenseList } from './components/ExpenseList';
import { FilterByCategory } from './components/FilterByCategory';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

const App = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state.budget));
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
              </div>
              {isValidBudget && (
                <div className="max-w-3xl mx-auto py-10">
                  <FilterByCategory />
                  <ExpenseList />
                  <ExpenseModal />
                </div>
              )}
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
