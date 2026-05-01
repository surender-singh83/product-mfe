import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import { debounce } from "../../utils";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const moveToSearch = useMemo(
    () =>
      debounce((val: string) => {
        navigate(`/search?keyword=${val}`);
      }, 1000),
    [navigate],
  );
  const handleSearch = (val: string) => {
    setSearch(val);
    moveToSearch(val);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-5">
          <h1 className="text-2xl font-bold text-indigo-600">ShopSphere</h1>
          <SearchBar
            onChange={handleSearch}
            value={search}
            placeholder="Search Data..."
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </nav>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
          Cart (2)
        </button>
      </div>
    </header>
  );
};

export default Header;
