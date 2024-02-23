import BottomNav from "../user/Bottomnav";
import Sidebar from "../user/Sidebar";

// interface Props {
//   children: any;
// }

function DashboardLayout({ children }: any) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <main className="w-5/6 max-md:w-full h-full bg-accent py-8 md:px-36">
        { children }
      </main>
      <BottomNav />
    </div>
  );
}

export default DashboardLayout;
