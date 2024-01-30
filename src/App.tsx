// import GuestLayout from "./components/layouts/GuestLayout";
// import { getUser } from "./utils/user/getUser";
// import DashboardLayout from "./components/layouts/DashboardLayout";
// import GuestLayout from "./components/layouts/GuestLayout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import CreateTransaction from "./pages/CreateTransaction";
import JoinTransaction from "./pages/JoinTransaction";
import Transaction from "./pages/Transaction";
import Favicon from "react-favicon";
import favicon from "./assets/favicon.ico";


function App() {
  return (
    <>
      <Favicon url={favicon} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-transactions" element={<Transactions />} />
        <Route path="/create-transaction" element={<CreateTransaction />} />
        <Route path="/join-transaction" element={<JoinTransaction />} />
        <Route path="my-transactions/:id" element={<Transaction />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
