import DashboardLayout from "../components/layouts/DashboardLayout";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import blank from "../assets/blank-paper.svg";

function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <DashboardLayout>
      <div className="p-10 flex flex-col items-center">
        <div className="bg-[#0000000D] rounded-md shadow-md p-5 md:p-10 w-full sm:w-2/3 md:w-4/5 lg:w-3/5">
          <div className="bg-black px-5 py-3 md:py-5 md:px-8 rounded-md text-gray-200 shadow mb-5">
            <p className="text-lg font-medium mb-2">Balance</p>
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">
                &#8358;
                {showBalance ? " 0.00" : "********"}
              </p>
              <button onClick={() => setShowBalance(!showBalance)}>
                <FaEye size={23} />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-medium mb-3">Recent transactions</h4>
            <div className="flex flex-col items-center bg-gray-100 p-5">
              <img 
                src={blank} 
                alt="" 
                className="mb-5 w-1/3 h-auto"
              />
              <p className="">You have no transactions yet</p>
            </div>
          </div>

          <button
            className="w-full py-4 bg-teal-800 text-accent rounded-full shadow-lg text-lg"
          >
            New transaction
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
