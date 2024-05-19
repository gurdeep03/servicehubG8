import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import Elect from "./pages/electrical";
import Connect from "./pages/connect";



import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/About" element={<About />} />
        <Route path="/electrical" element={<Elect />} />
        <Route path="/connect" element={<Connect />} />
        {" "}
        
      </Routes>
    </Router>
  );
}
export default App;
