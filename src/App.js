import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Manage from "./Pages/Manage";
import Payperks from "./Pages/Payperks";
import Activity from "./Pages/Activity";
import Navbar1 from "./components/NavBar1";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/payperks" element={<Payperks />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

      // {location.pathname !== "/" && <Footer />}