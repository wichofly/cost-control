import expensePlannerImage from '../assets/expense-planner.webp';

export const Header = () => {
  return (
    <header className="bg-sky-600 py-6 max-h-72">
      <div className="flex justify-around items-center">
        <h1 className="uppercase font-bold text-4xl text-white">
          Expense planner
        </h1>
        <a href="./">
          <img
            src={expensePlannerImage}
            alt="Expense Planner"
            className="w-20 h-auto rounded-2xl shadow-lg"
          />
        </a>
      </div>
    </header>
  );
};
