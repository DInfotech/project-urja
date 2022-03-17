import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import CompanyOverview from "./components/company overview/Overview";
// import Home from "./components/pages/Home";
// import Navbar from "./components/segments/Navbar";
import VisionMission from "./components/vision_&_mission/VisionMission";
import BoardDirectors from "./components/board directors/BoardDirectors";
import ContactUs from "./components/contact us/ContactUs";

import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/segments/Navbar";
import ElectricVehicles from "./components/pages/ElectricVehicles";
import AboutUs from "./components/pages/AboutUs";
function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/vehicles",
      element: <ElectricVehicles />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;
