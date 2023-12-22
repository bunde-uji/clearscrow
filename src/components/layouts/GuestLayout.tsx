import Home from "../../pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";


function GuestLayout() {
    return (  
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    );
}

export default GuestLayout;