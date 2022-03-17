import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ElectricVehicles from "./components/electric vehicles/ElectricVehicles";
import AboutUs from "./components/about us/AboutUs";
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
