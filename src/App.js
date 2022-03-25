import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ElectricVehicles from "./components/electric vehicles/ElectricVehicles";
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact us/ContactUs";
import Footer from "./components/footer/Footer";
import BusinessPartner from "./components/business partner/BusinessPartner";
import BoardDirectors from "./components/board directors/BoardDirectors";
import Products from "./components/Products/Products";
import SolarProjects from "./components/Solar Projects/SolarProjects";
import Ceo from "./components/CEO/Ceo";
import Overview from "./components/company overview/Overview";
import VisionMission from "./components/vision_&_mission/VisionMission";
import KeyManagerial from "./components/key_managerial/KeyManagerial";
import RightIssue from "./components/Right Issue/RightIssue";

import TermsConditions from "./components/Terms Conditions/TermsConditions";
import Franchisee from "./components/franchisee/franchisee";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/electric_vehicles",
      element: <ElectricVehicles />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/solar_projects",
      element: <SolarProjects />,
    },
    {
      path: "/ceo",
      element: <Ceo />,
    },
    {
      path: "/board_directors",
      element: <BoardDirectors />,
    },
    {
      path: "/business_partner",
      element: <BusinessPartner />,
    },
    {
      path: "/company_overview",
      element: <Overview />,
    },
    {
      path: "/vision_mission",
      element: <VisionMission />,
    },
    {
      path: "/key_managerial",
      element: <KeyManagerial />,
    },
    {
      path: "/franchisee",
      element: <Franchisee />,
    },
    {
      path: "/firstcall",
      element: <RightIssue />,
    },
    {
      path: "/terms&conditions",
      element: <TermsConditions />,
    },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
      <Footer />
    </Router>
  );
};

export default AppWrapper;
