import DashboardLayout from "../components/layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { transactions } from "../db/transactions";
import { Link } from "react-router-dom";
import money from "../assets/money.png";
import moneybag from "../assets/money-bag.png";
import trolley from "../assets/trolley.png";
import delivered from "../assets/delivered.png";
import { transactionStatus } from "../db/transactions";


function Transaction() {
    const {id} = useParams();
    
    const transaction = transactions.filter((t) => t.id == Number(id))   
    
    let statusNumber: number;

    for (const i of Object.values(transactionStatus)) {
        if (transaction[0].status === i) {
            statusNumber = Object.values(transactionStatus).indexOf(i)
        }
    }    
    
    return (  
        <DashboardLayout>
            <div>
                <div className="text-2xl flex items-center">
                    <Link to="/my-transactions" className="p-3 mr-5">
                        <FaChevronLeft size={28} />
                    </Link>
                    <span className="">{transaction[0].description}</span>
                </div>

                <div className="my-8">
                    <div className="flex justify-between px-10">
                        {statusIcons.map((icon, index) => (
                            <div key={icon.id} className="flex flex-col items-center">
                                <div className={`p-5 mb-2 border-[3px] inline border-teal-300 rounded-full ${index > statusNumber ? "grayscale" : ""}`}>
                                    <img 
                                        src={icon.icon} 
                                        alt="delivery status icon" 
                                        className="h-7 w-7"
                                    />
                                </div>
                                <span className="text-sm text-teal-700">{transactionStatus[icon.name as keyof typeof transactionStatus ]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Transaction;


const statusIcons = [
    {id: 1, name: "transactionCreated", icon: trolley},
    {id: 2, name: "fundsPaid", icon: moneybag},
    {id: 1, name: "packageDelivered", icon: delivered},
    {id: 1, name: "fundsReleased", icon: money},
]