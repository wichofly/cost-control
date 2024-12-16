import { BudgetForm } from './components/BudgetForm';
import { Header } from './components/Header';
import { useBudget } from './hooks/useBudget';

const App = () => {
  const { state, dispatch } = useBudget();
  console.log(state);

  return (
    <>
      <Header />
      <BudgetForm />
    </>
  );
};

export default App;
