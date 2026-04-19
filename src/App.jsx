import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import Hero from "./Pages/hero";
import Events from "./Pages/events";
import Home from "./Pages/home";
import Team from "./Pages/team.jsx";
import Register from "./Pages/register.jsx"
import Login from "./Pages/login.jsx";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar mounted={true} />
      <Routes>
        {/* Home Page */}
        <Route path ="/events" element={<Events />} />
         <Route path ="/" element={<Home />} />
         <Route path ="/team" element ={<Team />}  />
         <Route path ="/register" element ={<Register />} />
         <Route path ="/login" element ={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
