import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import OTP from "./pages/OTP";
import NewPassword from "./pages/NewPassword";
import Customer from "./pages/Customer";
import Artist from "./pages/Artist";
import Order from "./pages/Order";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import ArtistDetails from "./pages/ArtistDetails";
import CustomerDetail from "./pages/CustomerDetail";
import OrderDetail from "./pages/OrderDetail";
import ArtistRanking from "./pages/ArtistRanking";
import Revenue from "./pages/Revenue";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Routes>
      {!isAuthenticated && location.pathname !== "/login" ? (
        <Route path="*" element={<Navigate to="/login" replace />} />
      ) : (
        <>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/:customerId" element={<CustomerDetail />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/ranking" element={<ArtistRanking />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/view" element={<OrderDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
