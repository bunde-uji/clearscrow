import DashboardLayout from "../components/layouts/DashboardLayout";
import TransactionCard from "../components/user/TransactionCard";
import { transactions } from "../db/transactions";


function Transactions() {
  return (
    <DashboardLayout>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">My Transactions</h1>
        <div className="flex flex-col gap-4">
          {transactions.map(transaction => (
            <TransactionCard 
              key={transaction.id.toString()}
              id={transaction.id}
              totalPrice={transaction.totalPrice}
              description={transaction.description}
              status={transaction.status}
              time={transaction.dateCreated}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Transactions;
