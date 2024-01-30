import Sidebar from "../user/Sidebar";

// interface Props {
//   children: any;
// }

function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-5/6 max-md:w-full h-full bg-accent py-8 md:px-36">
        { children }
      </main>
    </div>
  );
}

export default DashboardLayout;
