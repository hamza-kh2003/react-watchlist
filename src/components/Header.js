import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary flex justify-between sm:justify-around items-center py-4 sm:px-0 px-4 text-white">
      <h1>
        <Link to="/" className="text-xl font-semibold">
          WatchList
        </Link>
      </h1>
      <ul className="flex gap-8">
        <li>
          <Link to="/">Watch List</Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
        <li>
          <Link
            to="/add"
            className="bg-secondary p-2 rounded-md text-center text-black font-bold"
          >
            + ADD
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
