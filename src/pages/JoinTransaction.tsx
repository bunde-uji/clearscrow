import DashboardLayout from "../components/layouts/DashboardLayout";
import { Link } from "react-router-dom";

function JoinTransaction() {
  return (
    <DashboardLayout>
      <div className="flex justify-center">
        <div className="w-2/4">
          <p className="text-2xl font-medium mb-5">Join transaction</p>

          <form className="bg-[#0000000D] rounded-2xl px-10 py-6 text-xl flex flex-col items-center shadow-md">
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="" className="mb-1">
                Transaction ID
              </label>
              <input
                type="text"
                placeholder=""
                required
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-teal-800 text-accent rounded-full shadow-md mb-5"
            >
              Join transaction
            </button>

            <p className="text-base text-gray-700">
                Already joined the transaction? 
                <Link to="/my-transactions" className="text-teal-800 ml-2">Click here to confirm</Link>
            </p>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default JoinTransaction;
