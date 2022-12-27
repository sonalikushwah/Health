import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/Home/components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./Component/Footer";
import Login from "./pages/Home/components/Login-Singup";
import User from "./pages/User/User";
import "./assests/css for Home/style.css";
import HealthTips from "./pages/User/HealthTips";
import Doctors from "./pages/User/Doctors";
import Hospitals from "./pages/User/Hospitals";
import MyAppintment from "./pages/User/MyAppointment";
import Notifications from "./pages/User/Notifications";
import Support from "./pages/User/Support";
import Profile from "./pages/User/Profile/Profile";
import UserDoctorDetails from "./pages/User/DoctorDetails";
import Doctor from "./pages/Doctor/Doctor";
import Appointment from "./pages/Doctor/Appointment";
import Notification from "./pages/Doctor/Notifications";
import Supports from "./pages/Doctor/Support";
import Chat from "./pages/Doctor/Chat";
import BacktoTop from "./BacktoTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/dashboard" element={<User />}></Route>
        <Route path="/user/healthtips" element={<HealthTips />}></Route>
        <Route path="/user/doctors" element={<Doctors />}></Route>
        <Route path="/user/hospitals" element={<Hospitals />}></Route>
        <Route path="/user/myappointment" element={<MyAppintment />}></Route>
        <Route path="/user/notifications" element={<Notifications />}></Route>
        <Route path="/user/support" element={<Support />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route
          path="/user/doctors/detail"
          element={<UserDoctorDetails />}
        ></Route>
        <Route path="/doctor/profile" element={<Doctor />}></Route>
        <Route path="/doctor/appointment" element={<Appointment />}></Route>
        <Route path="/doctor/notifications" element={<Notification />}></Route>
        <Route path="/doctor/support" element={<Supports />}></Route>
        <Route path="/doctor/chat" element={<Chat />}></Route>
      </Routes>
      <Footer />
      <BacktoTop />
    </>
  );
}

export default App;
