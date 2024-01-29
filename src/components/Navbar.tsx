import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="py-4 flex justify-between items-center w-screen px-5 sm:px-10 md:px-14 lg:px-20 bg-teal-800">
      <Logo />
      <Link
        to="/signup"
        className="py-4 px-10 text-lg rounded-full font-semibold bg-yellow-200 cursor-pointer"
      >
        Get Started!
      </Link>
    </nav>
  );
}

export default Navbar;
