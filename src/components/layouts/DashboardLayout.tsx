import Sidebar from "../user/Sidebar";

// interface Props {
//   children: any;
// }

function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow h-full bg-accent py-8 px-10">
        { children }
      </main>
    </div>
  );
}

export default DashboardLayout;
