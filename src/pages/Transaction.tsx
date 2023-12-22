import DashboardLayout from "../components/layouts/DashboardLayout";
import { useParams } from "react-router-dom";

function Transaction() {
    const {id} = useParams();
    
    return (  
        <DashboardLayout>
            <div>Transaction {id}</div>
        </DashboardLayout>
    );
}

export default Transaction;