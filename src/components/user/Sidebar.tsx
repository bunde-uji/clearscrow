import SidebarItem from "./SidebarItem";


function Sidebar() {
  return (
    <div className="w-1/6 h-full bg-teal-800 flex flex-col py-8 drop-shadow-2xl">
      <div className="px-5 mb-10">
        <h3 className="text-yellow-200 text-3xl font-extrabold font-mono italic pb-5">
          Clearscrow
        </h3>

        <p className="text-accent text-lg">Welcome, Sam</p>
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



