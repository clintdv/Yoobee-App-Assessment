import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import AddListing from "./pages/AddListing";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Cart from "./pages/Cart";
import MyListings from "./pages/MyListings";
import OrderTracking from "./pages/OrderTracking";
import Checkout from "./pages/Checkout";
import { Navigate } from "react-router-dom";
import {PropTypes} from "prop-types";

function App() {
 const ProtectedRoute = ({ children }) => {
   const token = localStorage.getItem("token");
   return token ? children : <Navigate to="/login" />;
 };
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };


  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route
            path="/addlisting"
            element={
              <ProtectedRoute>
                <AddListing />
              </ProtectedRoute>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productid" element={<ProductDetails />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/mycart" element={<Cart />} />
          <Route
            path="/mylistings"
            element={
              <ProtectedRoute>
                <MyListings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/ordertracking" element={<OrderTracking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
