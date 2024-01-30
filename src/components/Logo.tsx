import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link 
        to="/"
        className="text-yellow-200 text-lg sm:text-xl md:text-2xl font-extrabold font-mono italic"
    >
      Clearscrow
    </Link>
  );
}

export default Logo;
