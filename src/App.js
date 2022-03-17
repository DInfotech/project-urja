import "./App.css";
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
