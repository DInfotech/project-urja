import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ElectricVehicles from "./components/electric vehicles/ElectricVehicles";
import AboutUs from "./components/about us/AboutUs";
// import VisionMission from "./components/vision_&_mission/VisionMission";
import Projects from "./components/projects/Projects";
import ContactUs from "./components/contact us/ContactUs";
import KeyManagerial from "./components/key_managerial/KeyManagerial";
import SolarProjects from "./components/Solar Projects/SolarProjects";
import Ceo from "./components/CEO/Ceo";
<<<<<<< HEAD
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <CompanyOverview/>
      <VisionMission/>
      <BoardDirectors/>
      <ContactUs/>
      <KeyManagerial/>
      <SolarProjects/>
      <Ceo/>
      <Products/>
    </div>
  );
=======
import Footer from "./components/footer/Footer";
// import BusinessPartner from "./components/business partner/business";
// import CompanyOverview from "./components/company overview/Overview";
// import BoardDirectors from "./components/board directors/BoardDirectors";
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
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/project",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);
  return routes;
>>>>>>> c0e09d6f012a5f9767c9d04a696d0e314e99c1dc
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
