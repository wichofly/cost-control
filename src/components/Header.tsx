import { NavLink } from 'react-router-dom';
import expensePlannerImage from '../assets/expense-planner.webp';

export const Header = () => {
  return (
    <header className="bg-sky-600 py-6 max-h-72">
      <div className="flex items-center justify-between px-16">
        <NavLink to="/" className="flex items-center">
          <img
            src={expensePlannerImage}
            alt="Expense Planner"
            className="w-16 h-auto rounded-2xl shadow-lg"
          />
          <h1 className="ml-2 uppercase font-bold text-3xl text-white">
            Expense planner
          </h1>
        </NavLink>

        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-2xl'
                : 'text-gray-300 text-2xl font-semibold'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/budget-tracker"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-2xl'
                : 'text-gray-300 text-2xl font-semibold'
            }
          >
            Budget Tracker
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-2xl'
                : 'text-gray-300 text-2xl font-semibold'
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
