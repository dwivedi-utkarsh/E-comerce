import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Mobiles from "./Component/Mobiles";
import Laptop from "./Component/Laptop";
import Fashion from "./Component/Fashion";
import Electronic from "./Component/Electronic";
import Details from "./Component/Details";
import FaishonDetails from "./Component/FaishonDetails";
import MobileDetails from "./Component/MobileDetails";
import LaptopDetails from "./Component/LaptopDetails";
import HomeDetails from "./Component/HomeDetails";

import Profile from "./Component/Profile";
import Login from "./Component/Login"

import SignUp from "./Component/SignUp"
import Cart from './Component/Cart'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>

<ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/faishondetails/:id" element={<FaishonDetails />} />
        <Route path="/mobiledetails/:id" element={<MobileDetails />} />
        <Route path="/laptopdetails/:id" element={<LaptopDetails />} />
        <Route path="/homedetails/:id" element={<HomeDetails />} />
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>

        <Route path="/Cart" element={<Cart/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
