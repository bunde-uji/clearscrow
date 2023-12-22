import { Link, useMatch } from "react-router-dom";


interface Props {
    name: string
    path: string
}

const activeClass = "bg-white bg-opacity-10 border-r-8 border-accent"

function SidebarItem({name, path}: Props) {    
    return (  
        <Link 
            to={path}
            className={`text-accent text-xl backdrop-blur-lg w-full px-5 py-2 hover:bg-white hover:bg-opacity-10 ${useMatch(path) ? activeClass : ""}`}
        >
            {name}
        </Link>
    );
}

export default SidebarItem;