import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AddDoctors from "./Pages/Dashboard/AddDoctors";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="allusers" element={<AllUsers/>}></Route>
        <Route path="add-doctors" element={<AddDoctors/>} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;
