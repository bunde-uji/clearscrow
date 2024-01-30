import Logo from "../Logo";
import SidebarItem from "./SidebarItem";


function Sidebar() {
  return (
    <div className="w-1/6 h-full bg-teal-800 md:flex flex-col py-8 drop-shadow-2xl hidden">
      <div className="px-0 md:px-5 mb-10">
        <Logo />

        <p className="text-accent text-lg mt-3">Welcome, Sam</p>
      </div>

      {
        nav.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              name={item.name}
              path={item.path}
            />
          ) 
        })
      }
    </div>
  );
}

export default Sidebar;


const nav = [
  {name: "Dashboard", path: "/dashboard"},
  {name: "Create Transaction", path: "/create-transaction"},
  {name: "Join Transaction", path: "/join-transaction"},
  {name: "My Transactions", path: "/my-transactions"},
]



