import { useContext } from 'react';
import { BudgetForm } from './components/BudgetForm';
import { Header } from './components/Header';
import { BudgetContext } from './context/BudgetContext';

const App = () => {
  const context = useContext(BudgetContext);
  console.log(context);
  
  return (
    <div>
      <Header />
      <BudgetForm />
    </div>
  );
};

export default App;
