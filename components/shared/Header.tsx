import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-blue-600  py-2 sticky top-0 shadow-lg z-20">
      <div className="container mx-auto px-4 flex gap-2 justify-between items-center">
        <Link href={"/"} className="font-bold text-xl text-white">
          Recipe App
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
