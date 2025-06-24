import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import OTP from "./pages/OTP";
import NewPassword from "./pages/NewPassword";
import Customer from "./pages/Customer";
import Settings from "./pages/Settings";
import CustomerDetail from "./pages/CustomerDetail";
import Revenue from "./pages/Revenue";
import Gift from "./pages/Gift";
import Reports from "./pages/Reports";
import ReportDetail from "./pages/ReportDetail";

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
            <Route path="/gifts" element={<Gift />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/:reportId" element={<ReportDetail />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
