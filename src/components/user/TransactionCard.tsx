import { Link } from "react-router-dom";


interface Props {
    id: string
    totalPrice: number
    time: 
}

function TransactionCard({id}: Props) {
    return (  
        <Link to={`/my-transactions/${id}`}>
            <div></div>
            <div></div>
        </Link>
    );
}

export default TransactionCard;