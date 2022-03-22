import "./App.css";
import "./common_styles/variables.css";
import "./common_styles/commonClasses.css";
import CompanyOverview from "./components/company overview/Overview";
import Home from "./components/pages/Home";
import Navbar from "./components/segments/Navbar";
import VisionMission from "./components/vision_&_mission/VisionMission";
import BoardDirectors from "./components/board directors/BoardDirectors";
import ContactUs from "./components/contact us/ContactUs";
import KeyManagerial from "./components/key_managerial/KeyManagerial";
import SolarProjects from "./components/Solar Projects/SolarProjects";
import Ceo from "./components/CEO/Ceo";
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
}

export default App;
