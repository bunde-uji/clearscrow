import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { setUser } from "../utils/user/setUser";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    
    setTimeout(() => {
      setUser({ name, email, password });
      navigate("/dashboard")
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-teal-800 flex flex-col items-center px-6 sm:px-10 md:px-20">
      <div className="p-8">
        <Link
          to="/"
          className="text-yellow-200 text-3xl font-extrabold font-mono italic"
        >
          Clearscrow
        </Link>
      </div>

      <div className="flex flex-col items-center w-full py-1">
        <h1 className="text-2xl font-semibold text-accent mb-3">
          Create an account
        </h1>

        <form
          className="bg-accent rounded-3xl w-full md:w-3/5 lg:2/5 xl:w-1/3 p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Your full name or your business' name"
              className="input input-bordered w-full rounded-xl"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full mb-5">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              placeholder="e.g johnsnow@gmail.com"
              className="input input-bordered w-full rounded-xl"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* <div className="flex flex-col w-full mb-3">
            <label htmlFor="">Phone number:</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="input input-bordered w-full mb-3 rounded-xl"
            />
          </div> */}

          <div className="flex flex-col w-full mb-5">
            <label htmlFor="">Password:</label>
            <div className="flex relative">
              <input
                type={`${passwordVisible ? "text" : "password"}`}
                placeholder=""
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

          <div className="flex flex-col w-full mb-5">
            <label htmlFor="">Re-enter password:</label>
            <div className="flex relative">
              <input
                type={`${retypePasswordVisible ? "text" : "password"}`}
                placeholder=""
                className="input input-bordered w-full rounded-xl"
                onChange={(e) => setRetypePassword(e.target.value)}
              />

              <button
                className={`absolute right-3 top-[50%] -translate-y-[50%] ${
                  retypePassword.length > 0 ? "" : "hidden"
                }`}
                onClick={() => setRetypePasswordVisible(!retypePasswordVisible)}
              >
                {retypePasswordVisible ? (
                  <FaEyeSlash size={22} />
                ) : (
                  <FaEye size={22} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-800 text-accent rounded-2xl shadow-md"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <p className="text-accent text-xl mt-5">
          Already have an account?
          <Link to="/signin" className="ml-2 font-medium text-yellow-100">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
