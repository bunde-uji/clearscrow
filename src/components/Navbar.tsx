import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="h-[10vh] flex justify-between items-center w-screen px-5 sm:px-10 md:px-14 lg:px-20 bg-teal-800">
      <Logo />
      <Link
        to="/signup"
        className="py-2 sm:py-4 px-6 sm:px-10 text-base sm:text-lg rounded-full font-semibold bg-yellow-200 cursor-pointer"
      >
        Get Started!
      </Link>
    </nav>
  );
}

export default Navbar;
