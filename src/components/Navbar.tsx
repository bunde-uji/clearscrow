import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 py-4 flex justify-between w-full px-20">
      <h3 className="text-yellow-200 text-3xl font-extrabold font-mono italic">
        Algo Escrow
      </h3>
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
