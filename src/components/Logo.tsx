import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link 
        to="/"
        className="text-yellow-200 text-xl sm:text-2xl md:text-3xl font-extrabold font-mono italic"
    >
      Clearscrow
    </Link>
  );
}

export default Logo;
