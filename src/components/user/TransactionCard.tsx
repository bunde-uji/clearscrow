import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";


interface Props {
    id: number
    totalPrice: number
    time: Date
    description: string
    status: string
}

import { timeDifference } from "../../utils/timeDifference";

function TransactionCard({id, totalPrice, time, description, status}: Props) {
    const timeDiff = timeDifference(time);

    console.log(timeDiff);
    

    return (  
        <Link to={`/my-transactions/${id}`}>
            <div className="border px-5 py-3 rounded-md text-lg shadow">
                <div className="flex justify-between mb-4">
                    <p>{description}</p>
                    <p>
                        <span className="mr-1">&#8358;</span>
                        {totalPrice.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between text-gray-700">
                    <p>{timeDiff}</p>
                    <p className="flex items-center">
                        <span className="-translate-y-[1px] mr-2">{status}</span>
                        <FaChevronRight />    
                    </p>
                </div>
                <progress className="progress w-full" value={1} max="3"></progress>
            </div>
        </Link>
    );
}

export default TransactionCard;