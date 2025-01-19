import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="text-center py-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
