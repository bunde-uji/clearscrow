import DashboardLayout from "../components/layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { transactions } from "../db/transactions";
import { Link } from "react-router-dom";
import { money } from "../assets/money.png";
import { moneybag } from "../assets/money-bag.png";
import { trolley } from "../assets/trolley.png";
import { delivered } from "../assets/delivered.png";


function Transaction() {
    const {id} = useParams();
    
    const transaction = transactions.filter((t) => t.id == Number(id))    
    
    return (  
        <DashboardLayout>
            <div>
                <div className="text-2xl flex items-center">
                    <Link to="/my-transactions" className="p-3 mr-5">
                        <FaChevronLeft size={28} />
                    </Link>
                    <span className="">{transaction[0].description}</span>
                </div>

                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Transaction;