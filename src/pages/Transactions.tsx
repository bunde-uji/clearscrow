import DashboardLayout from "../components/layouts/DashboardLayout";
import TransactionCard from "../components/user/TransactionCard";
import { transactions } from "../db/transactions";
import blank from "../assets/blank-paper.svg"


function Transactions() {
  return (
    <DashboardLayout>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">My Transactions</h1>
        <div className="flex flex-col items-center gap-4">
          {transactions.length > 0 ? transactions.map(transaction => (
            <TransactionCard 
              key={transaction?.id?.toString()}
              id={transaction?.id}
              totalPrice={transaction?.totalPrice}
              description={transaction?.description}
              status={transaction?.status}
              time={transaction?.dateCreated}
            />
          ))
          :
          <div className="w-full flex flex-col items-center">
            <img src={blank} alt="" className="w-full sm:w-2/3 md:w-1/2 h- mb-5" />
            <p className="md:text-lg">Oops! It appears you have no transactions yet</p>
          </div>
          }
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transactions;
