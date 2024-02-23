import { FaArchive } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { useMatch, Link } from "react-router-dom";


function BottomNav() {
    return (   
        <div className="fixed h-[10vh] w-full border-t border-t-gray-200 bottom-0 left-0 bg-transparent md:hidden flex">
            {
                nav.map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path}
                        className={`text-xs flex flex-col items-center justify-center flex-1 ${!useMatch(item.path) ? "grayscale" : "grayscale-0"} text-teal-800`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))
            }
        </div>
    );
}

export default BottomNav;


const nav = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <FaArchive size={25} />
    },
    {
        name: "Create transaction",
        path: "/create-transaction",
        icon: <FaFolderPlus size={25} />
    },
    {
        name: "Join transaction",
        path: "/join-transaction",
        icon: <FaDoorClosed size={25} />
    },
    {
        name: "My transactions",
        path: "/my-transactions",
        icon: <FaReceipt size={25} />
    }
]