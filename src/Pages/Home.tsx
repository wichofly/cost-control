import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="text-center py-10">
      <h1 className="text-4xl text-sky-600 font-semibold">
        Welcome to Expense Planner
      </h1>
      <p className="mt-4 text-gray-600 text-xl font-semibold">
        Track your expenses and budget effectively.
      </p>
      <div className="mt-8 space-x-4">
        <Link
          to="/budget-tracker"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Start Budget Tracking
        </Link>

        <Link
          to="/about"
          className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
};
