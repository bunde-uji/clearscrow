import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getUser } from "../utils/user/getUser";
import Logo from "../components/Logo";

// interface FormProp {
//   event: FormEventHandler<HTMLFormElement>;
// }

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const navigate = useNavigate();

  const user = getUser();

  console.log(user);

  const validateUser = () => {
    if (user) return password === user.password && email === user.email;
    return false;
  };

  console.log(validateUser());

  function handleSubmit() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (validateUser()) {
        navigate("/dashboard");
      } else {
        setInvalidLogin(true)
      }
    }, 2500);
  }

  return (
    <div className="min-h-screen bg-teal-800 flex flex-col items-center">
      <div className="p-3">
        {/* <Link
          to="/"
          className="text-yellow-200 text-3xl font-extrabold font-mono italic"
        >
          Algo Escrow
        </Link> */}
        <Logo />
      </div>

      <div className="flex flex-col items-center w-full py-20 px-8">
        <h1 className="text-xl sm:text-2xl font-medium sm:font-semibold text-accent mb-7">
          Sign in to your account
        </h1>

        {invalidLogin && <p className="mb-2 p-2 bg-accent text-red-400 rounded-md">Wrong username or password</p>}
        <div className="bg-accent rounded-3xl w-full md:w-3/5 lg:2/5 xl:w-1/3 p-5 md:p-10">
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="e.g johnsnow@gmail.com"
              className="input input-bordered w-full rounded-xl"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full mb-5">
            <label htmlFor="password">Password:</label>
            <div className="flex relative">
              <input
                type={`${passwordVisible ? "text" : "password"}`}
                placeholder=""
                id="password"
                className="input input-bordered w-full rounded-xl"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className={`absolute right-3 top-[50%] -translate-y-[50%] ${
                  password.length > 0 ? "" : "hidden"
                }`}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <FaEyeSlash size={22} />
                ) : (
                  <FaEye size={22} />
                )}
              </button>
            </div>
          </div>

          <button
            // type="submit"
            className="w-full py-4 bg-teal-800 text-accent rounded-2xl shadow-md"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign in"
            )}
          </button>
        </div>

        <p className="text-accent text-xl mt-5">
          Don't have an account?
          <Link to="/signup" className="ml-2 font-medium text-yellow-100">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
