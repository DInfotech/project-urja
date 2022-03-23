import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ElectricVehicles from "./components/electric vehicles/ElectricVehicles";
import AboutUs from "./components/about us/AboutUs";
import Projects from "./components/projects/Projects";
import ContactUs from "./components/contact us/ContactUs";
import Footer from "./components/footer/Footer";
import Products from "./components/Products/Products";
import SolarProjects from "./components/Solar Projects/SolarProjects";
import Ceo from "./components/CEO/Ceo";
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
}

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
      <SolarProjects/>
      <Ceo/>
      <Footer />
    </Router>
  );
};

export default AppWrapper;
