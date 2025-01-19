import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import expensePlannerImage from '../assets/expense-planner.webp';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-sky-600 py-6">
      <div className="flex items-center justify-between px-6 lg:px-16">
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={expensePlannerImage}
            alt="Expense Planner"
            className="w-12 h-auto rounded-xl shadow-lg lg:w-16"
          />
          <h1 className="ml-2 uppercase font-bold text-xl text-white lg:text-3xl">
            Expense Planner
          </h1>
        </NavLink>

        {!menuOpen && (
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            arial-label="Toggle Navigation Menu"
          >
            <Bars3CenterLeftIcon className="h-8 w-8" />
          </button>
        )}

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col items-center space-y-4 mt-4 lg:flex lg:flex-row lg:space-y-0 lg:space-x-6`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-lg lg:text-2xl'
                : 'text-gray-300 text-lg lg:text-2xl font-semibold'
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/budget-tracker"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-lg lg:text-2xl'
                : 'text-gray-300 text-lg lg:text-2xl font-semibold'
            }
            onClick={() => setMenuOpen(false)}
          >
            Budget Tracker
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline font-semibold text-lg lg:text-2xl'
                : 'text-gray-300 text-lg lg:text-2xl font-semibold'
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
