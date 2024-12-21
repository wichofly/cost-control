import { ChangeEvent } from 'react';
import { categories } from '../data/data';
import { useBudget } from '../hooks/useBudget';

export const FilterByCategory = () => {
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'filter-category',
      payload: { id: e.target.value },
    });
  };

  return (
    <div className="bg-white shadow-lg p-10 w-full flex items-center gap-5 ">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filter Expenses</label>
          <select
            id="category"
            className="bg-slate-100 p-3 rounded flex-1"
            onChange={handleChange}
          >
            <option value="category">-- All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
