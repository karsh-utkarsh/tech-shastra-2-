import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";
import Events from "./Pages/events";
import Home from "./Pages/home";
import Team from "./Pages/team.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path ="/events" element={<Events />} />
         <Route path ="/" element={<Home />} />
         <Route path ="/team" element ={<Team />}  />
      </Routes>
    </Router>
  );
}

export default App;
