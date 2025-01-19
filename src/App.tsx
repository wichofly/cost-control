import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './Pages/Home';
import BudgetTrackerPage from './Pages/BudgetTrackerPage';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget-tracker" element={<BudgetTrackerPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
