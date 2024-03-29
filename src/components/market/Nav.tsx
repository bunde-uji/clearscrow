import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import

function Nav() {
  return (
    <nav className="navbar py-4 flex justify-between items-center w-full px-20 bg-teal-800 shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FBFFF4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        

        <Link
          to="/"
          className="text-yellow-200 text-3xl font-extrabold font-mono italic"
        >
          Algo Escrow
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex text-accent">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a className="hover:text-accent">Cars</a>
          </li>

          <li tabIndex={0}>
            <details>
              <summary className="hover:text-accent">
                Gadgets & Electronics
              </summary>
              <ul className="p-2 text-teal-800 z-20">
                <li>
                  <a>Phones & Laptops</a>
                </li>
                <li>
                  <a>Home appliances</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a className="hover:text-accent">Fashion</a>
          </li>
          {/* <li>
            <a>Food & Groceries</a>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="#" className="mr-5">
          <FaUser size={28} color="#FBFFF4" />
        </Link>

        <button
          className="text-lg bg-slate-800 text-white mr-5 p-2 hover:bg-slate-700"
          onClick={() => localStorage.removeItem("user")}
        >
          Log Out
        </button>

        <button className="py-3 px-8 text-lg rounded-full font-semibold bg-yellow-200 cursor-pointer">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

export default Nav;
